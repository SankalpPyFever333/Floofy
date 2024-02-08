const mongoose = require("mongoose")

const prodReviewSchema = new mongoose.Schema(
  {
    User: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserLoginCredentials",
      required: true,
    },

    Product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Shop",
      required: true,
    },

    Comment: {
      type: String,
      required: true,
    },
    // add rating  field here
  },
  { timestamps: true }
);


const productReviwModal = mongoose.model("ProductReviewModal" , prodReviewSchema);
module.exports = productReviwModal;

