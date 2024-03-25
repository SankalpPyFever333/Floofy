const Razorpay = require("razorpay");
const dotenv = require("dotenv");
dotenv.config(); // Load environment variables

const razorpay = new Razorpay({
  key_id: process.env.KEY_ID,
  key_secret: process.env.KEY_SECRET,
});

const createAppointmentOfDoctor = async (req, res) => {
  const { amount, currency, receipt } = req.body;
  try {
    const order = await razorpay.orders.create({
      amount: amount * 100, 
      currency: currency.toUpperCase(),
      receipt: receipt,
      payment_capture: 1,
    });

    res
      .status(200)
      .json({ message: "AppointmentId generated", OrderResponse: order });
  } catch (error) {
    console.error("Error creating appointment with doctor", error);
    res
      .status(500)
      .json({ message: "Error creating appointment! Please try again later." }); // User-friendly error message
  }
};

module.exports = createAppointmentOfDoctor;
