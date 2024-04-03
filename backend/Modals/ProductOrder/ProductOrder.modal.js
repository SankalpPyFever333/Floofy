const mongoose = require("mongoose")

const orderSchema = mongoose.Schema(
  {
    User: {
      type: mongoose.Types.ObjectId,
      ref: "UserLoginCredentials",
      required: true,
    },
    Products: [
      {
        product: {
          type: mongoose.Types.ObjectId,
          ref: "Shop",
          required: true,
        },
        quantity: {
          type: String,
          required: true,
        },
      },
    ],
    totalAmount: {
      type: String,
      required: true,
    },
    deliveryAddress: {
      HomeAddress: {
        type: String,
      },
      PIN: {
        type: String,
      },
      District: {
        type: String,
      },
    },
    status: {
      type: String,
      enum: ["processing", "out for delivery", "delivered"],
      default: "processing",
    },
    CustomerEmail:{
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const  ProductOrder = mongoose.model("OrderDetails",orderSchema);

module.exports = ProductOrder;

