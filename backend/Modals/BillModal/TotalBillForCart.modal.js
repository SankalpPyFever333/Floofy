const mongoose = require("mongoose");

const TotalBillSchema = new mongoose.Schema(
  {
    InvoiceNumber: {
      type: String,
      required: true,
      unique: true,
      default: () => Math.random().toString(36).substr(2, 10),
    },
    OrderDate: {
      type: Date,
      required: true,
      default: Date.now,
    },
    DeliveryDate: {
      type: String,
      require: true,
      default: Date.now,
    },
    Customer: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "UserLoginCredentials",
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
        totalPrice: {
          type: String,
          required: true,
        },
      },
    ],

    totalBillAmount: {
      type: String,
      required: true,
    },

    Taxation: {
      type: String,
      required: true,
      default: "18",
    },
    PaymentMode: {
      type: String,
      required: true,
      enum: ["Cash", "UPI", "Card"],
      default: "UPI",
    },
    PaymentStatus: {
      type: String,
      required: true,
      enum: ["Pending", "Paid", "Cancelled"],
      default: "Pending",
    },
    DiscountedAmount: {
      type: String,
      required: true,
    },
    OrderStatus: {
      type: String,
      enum: [
        "Processing",
        "delivered",
        "cancellled",
      ],
      default: "Processing",
    },
  },
  
);

const TotalBillModal = mongoose.model("TotalBillGeneration", TotalBillSchema);
module.exports = TotalBillModal;
