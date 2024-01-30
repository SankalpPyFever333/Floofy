const mongoose = require("mongoose")

const orderSchema = mongoose.Schema({
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
            required: true
      }
    },
  ],
  totalAmount:{
      type: String,
      required:true
  },
  deliveryAddress:{
      type:String,
      require: true
  },
  status:{
      type:String,
      enum:["pending","processing","delivered"],
      default:"pending"
  }
} , { timestamps: true } );

const  ProductOrder = mongoose.model("OrderDetails",orderSchema);

module.exports = ProductOrder;

