const  ProductPaymentModal = require("../../../Modals/PaymentModal/BuyingProductPayment.modl");

const ProductPaymentController = async(req, res)=>{
      const {PaymentReponse} = req.body;
      try {
            // console.log("Payment Response is: " , PaymentReponse);
            req.send(200).json({message:"Payment successfull" , paymentReponse:PaymentReponse})
      } catch (error) {
            console.log("Error in payment:" , error);
            res.send(500).json({message:"Server Error!!"})
      }
}

module.exports = ProductPaymentController;

// check whether the payment is failed or success and if success, create that order in the database.
// After this, generate invoice and billing also and send it to customer.
// And then implements a system for order tracking having all the facilities.

