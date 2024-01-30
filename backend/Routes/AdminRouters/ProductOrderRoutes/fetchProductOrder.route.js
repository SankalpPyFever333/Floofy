
const express = require("express");
const fetchProductOrderDetails = require("../../../Controllers/AdminController/OrderController/fetchOrdersAdmin.controller");
const router = express.Router();

router.get("/fetchProductOrder" , fetchProductOrderDetails);

module.exports = router;

