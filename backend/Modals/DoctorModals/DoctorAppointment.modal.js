const mongoose = require("mongoose")

const AppointmentSchema = new mongoose.Schema(
  {
    User: {
      // type: mongoose.Types.ObjectId,
      // ref: "UserLoginCredentials",
      type: String,
      required: true,
    },
    Doctor: {
      type: mongoose.Types.ObjectId,
      ref: "UserLoginCredentials",
      required: true,
    },

    AppointmentDate: {
      type: Date,
      required: true,
      default: Date.now,
    },
    Status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled", "completed"],
      default: "pending",
    },
    PetImage: {
      type: String,
    },
    paymentAmount: {
        type: String,
        required: true,
      },
    ReasonForAppointment: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);


const AppointmentModel = new mongoose.model("DoctorAppointment" , AppointmentSchema);
module.exports= AppointmentModel;
