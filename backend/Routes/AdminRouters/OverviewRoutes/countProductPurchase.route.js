const express = require("express");
const countProductSales = require("../../../Controllers/AdminController/ShowOverview/showProductPurchaseData.controller");
const router = express.Router();

router.post("/countProductSales" , countProductSales);

module.exports = router;

