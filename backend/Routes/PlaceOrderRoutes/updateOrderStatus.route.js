const express = require("express");
const updateOrderStatus = require("../../Controllers/PlaceOrderByUser/updateOrderStatus.controller");
const router = express.Router();

router.put("/updateOrderStatus" , updateOrderStatus);

module.exports = router;
