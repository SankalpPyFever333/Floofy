const mongoose = require("mongoose")

const AppointmentSchema = new mongoose.Schema(
  {
    User: {
      type: mongoose.Types.ObjectId,
      ref: "UserLoginCredentials",
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
    Payment: {
      paymentAmount: {
        type: String,
        required: true,
      },
      paymentMethod: {
        type: String,
        enum: ["credit_card", "debit_card", "upi"],
        required: true,
      },
      paymentStatus: {
        type: String,
        enum: ["paid", "unpaid"],
        default: "unpaid",
      },
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
