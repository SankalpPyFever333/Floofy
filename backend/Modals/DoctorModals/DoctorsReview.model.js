const mongoose  = require("mongoose")

const DoctorReviewSchema = new mongoose.Schema(
  {
    User: {
      type: mongoose.Types.ObjectId,
      ref: "UserLoginCredentials",
      required: true,
    },
    Doctor: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "DoctorModel",
    },
    rating: {
      type: String,
      required: true,
      min: 1,
      max: 5,
    }

  },
  {
    timestamps: true,
  }
);

const DoctorReviewModel = mongoose.model("DoctorReview" , DoctorReviewSchema);
module.exports = DoctorReviewModel;
