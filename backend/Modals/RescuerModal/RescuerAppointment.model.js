const mongoose = require("mongoose")

const RescuerAppointmentSchema = new mongoose.Schema(
  {
    User: {
      type: mongoose.Types.ObjectId,
      ref: "UserLoginCredentials",
      required: true,
    },
    Rescuer: {
      type: mongoose.Types.ObjectId,
      ref: "Rescuer",
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

const  RescuerAppointmentModal = mongoose.model('RescuerAppointment', RescuerAppointmentSchema);
module.exports = RescuerAppointmentModal;

// error in this is that it is not getting the path to Rescue and also I had commented the fetch review middleware in server.js file bcoz will be executed when I hit this api. So solve these.
