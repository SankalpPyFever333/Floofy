const express = require("express");
const calTotalRevenueDoc = require("../../../Controllers/Doctor/ShowAppointRevDoctor/CalculateTotalRevenue.controller");
const router = express.Router();

router.post("/calTotalRevenueDoc" , calTotalRevenueDoc);

module.exports = router;
