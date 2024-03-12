const Razorpay = require("razorpay");
const dotenv = require("dotenv");
dotenv.config(); // Load environment variables

const razorpay = new Razorpay({
  key_id: process.env.KEY_ID,
  key_secret: process.env.KEY_SECRET,
});

const createOrder = async (req, res) => {
  const { amount, currency, receipt } = req.body;

  try {
    const order = await razorpay.orders.create({
      amount: amount * 100, // Convert amount to paise (assuming currency is INR)
      currency: currency.toUpperCase(), // Ensure consistent case (e.g., INR)
      receipt: receipt,
      payment_capture: 1, // Auto capture payments (optional)
    });

    res
      .status(200)
      .json({ message: "OrderId generated", OrderResponse: order });
  } catch (error) {
    console.error("Error creating order:", error);
    res
      .status(500)
      .json({ message: "Error creating order. Please try again later." }); // User-friendly error message
  }
};

module.exports = createOrder;
