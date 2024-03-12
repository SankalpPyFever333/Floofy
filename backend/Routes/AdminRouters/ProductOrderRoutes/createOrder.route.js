const express = require("express");
const createProductOrder = require("../../../Controllers/AdminController/OrderController/createOrder.controller");
const router = express.Router();

router.post("https://api.razorpay.com/v1/orders", createProductOrder);

module.exports = router;



