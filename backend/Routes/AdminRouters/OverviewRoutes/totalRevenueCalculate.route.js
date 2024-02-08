const express = require("express");
const totalRevenueCalculation = require("../../../Controllers/AdminController/ShowOverview/showTotalRevenue.controller");
const router = express.Router();

router.post("/calculateRevenueGenerated" , totalRevenueCalculation);

module.exports = router;