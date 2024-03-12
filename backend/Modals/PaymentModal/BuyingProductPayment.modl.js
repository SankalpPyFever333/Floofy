const mongoose = require('mongoose')

const ProductPaymentSchema=  new mongoose.Schema({
      PaymentResponse:{
            type:String,
            required: true
      }
})

const ProductPaymentModal = new mongoose.model("ProductPayment" , ProductPaymentSchema);
module.exports = ProductPaymentModal;


