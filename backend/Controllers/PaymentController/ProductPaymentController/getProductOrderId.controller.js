const Razorpay = require("razorpay");



const razorpay = new Razorpay({
  key_id: "rzp_test_2Q30fucOuJvMqJ",
  key_secret: "ZWgEtZXJGXDwRvbihYEA0QWf",
});

const createOrder = async (req, res) => {
      const {Amount ,  currency , receipt} = req.body;
      try {
      
    // Create order request
    const order = razorpay.orders.create({
      amount: Amount, // Amount in paise
      currency: currency, // Currency, e.g., INR
      receipt: receipt, // Receipt ID, e.g., order1234
      payment_capture: 1, // Auto capture payments
    });

    res.send(200).json({message:"OrderId generated" , OrderResponse: order});
    
    
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};

module.exports = createOrder;
