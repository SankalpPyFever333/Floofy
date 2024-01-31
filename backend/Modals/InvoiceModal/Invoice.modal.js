const mongoose = require("mongoose");

const InvoiceSchema = new mongoose.Schema({
  InvoiceNumber: {
    type: String,
    required: true,
    unique: true
  },
  OrderDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  DeliveryDate:{
      type: String,
      require: true
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
      default: "18"
  },
  PaymentMode:{
      type: String,
      required: true,
      enum:['Cash','UPI', 'Card'],
      default:'UPI'
  },
  PaymentStatus:{
      type:String,
      required: true,
      enum:['Pending', 'Paid' , 'Cancelled'],
      default: 'Pending'
  } , 
  DiscountedAmount:{
      type: String,
      required: true,
  },
  OrderStatus:{
      type: String,
      enum: ['Processing' ,'dispatching', 'shipping' , 'delivered' , 'cancellled'],
      default:'Processing'
  }


});

const InvoiceModal = mongoose.model("InvoiceGeneration", InvoiceSchema);
module.exports = InvoiceModal;
