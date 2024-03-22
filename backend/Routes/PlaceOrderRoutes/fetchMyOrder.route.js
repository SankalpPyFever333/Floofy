const express = require("express");
const fetchMyProductOrderDetails = require("../../Controllers/AdminController/OrderController/fetchSpecificUserOrders.controller");
const router = express.Router();

router.post("/fetchMyProductOrder" , fetchMyProductOrderDetails);

module.exports = router;

