const express = require('express');
const cancelOrder = require('../../Controllers/PlaceOrderByUser/cancelOrder.controller');
const router = express.Router();

router.delete("/cancelOrder" , cancelOrder);
module.exports = router;

