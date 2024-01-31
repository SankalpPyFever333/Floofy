const express = require("express");
const generateInvoice = require("../../Controllers/InvoiceGeneation/invoiceGeneration.controller");
const router = express.Router();

router.post("/generateInvoice", generateInvoice);

module.exports = router;

