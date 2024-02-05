const express = require("express");
const totalRevenueCalculation = require("../../../Controllers/AdminController/ShowOverview/showTotalRevenue.controller");
const router = express.Router();

router.get("/calculateRevenueGenerated" , totalRevenueCalculation);

module.exports = router;