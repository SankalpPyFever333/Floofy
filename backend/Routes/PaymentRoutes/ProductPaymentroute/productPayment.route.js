const express = require("express");
const ProductPaymentController = require("../../../Controllers/PaymentController/ProductPaymentController/productPayment.controller");
const router = express.Router();

router.post("/productBuyingPayment" , ProductPaymentController);

module.exports = router;
