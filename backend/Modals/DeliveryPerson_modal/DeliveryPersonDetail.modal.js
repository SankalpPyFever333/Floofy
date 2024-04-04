const mongoose = require("mongoose")

const deliveryPersonDetails = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  OrderDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "OrderDetails",
  },
});

const deliveryPersonModal = new mongoose.model("DeliveryPersonCollection" , deliveryPersonDetails);
module.exports = deliveryPersonModal;

