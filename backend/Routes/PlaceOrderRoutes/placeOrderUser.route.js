const express = require("express");
const placeOrderByUser = require("../../Controllers/PlaceOrderByUser/placeOrderByUser.controller");
const router = express.Router();

router.post("/place_OrderByUser" , placeOrderByUser);

module.exports = router;
