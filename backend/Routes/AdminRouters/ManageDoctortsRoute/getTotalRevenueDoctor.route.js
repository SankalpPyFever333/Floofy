const express = require("express");
const getTotalRevenueByDoctor = require("../../../Controllers/AdminController/ManageDoctors/TotalRevenue/GetTotalRevenueDoctor.controller");
const router = express.Router();

router.get("/getTotalRevenue/:doctorId" , getTotalRevenueByDoctor)

module.exports = router;
