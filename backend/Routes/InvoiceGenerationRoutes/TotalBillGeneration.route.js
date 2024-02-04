const express = require("express");
const generateBillForCart = require("../../Controllers/TotalBillGeneation/TotalBillGeneration.controller");
const router = express.Router();

router.post("/generateInvoice", generateBillForCart);

module.exports = router;

