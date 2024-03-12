const express = require("express");
const createOrder = require("../../../Controllers/PaymentController/ProductPaymentController/getProductOrderId.controller");
const router =  express.Router();

router.post("/v1/orders", createOrder);

module.exports = router;

