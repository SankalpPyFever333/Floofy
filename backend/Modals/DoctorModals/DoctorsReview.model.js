const mongoose  = require("mongoose")

const DoctorReviewSchema = new mongoose.Schema({
  User: {
    type: mongoose.Types.ObjectId,
    ref: "UserLoginCredentials",
    required: true,
  },
  Doctor: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Doctor",
  },
  rating:{
      type: String,
      required: true,
      min:1,
      max:5
  },
  Comment:{
      type: String,
      required: true
  }
} , {
      timestamps: true
});

const DoctorReviewModel = mongoose.model("DoctorReview" , DoctorReviewSchema);
module.exports = DoctorReviewModel;
