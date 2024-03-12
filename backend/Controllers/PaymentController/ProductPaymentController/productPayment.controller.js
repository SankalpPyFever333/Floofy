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
