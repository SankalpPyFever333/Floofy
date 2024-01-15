const express = require("express")
const AddProdinDb = require("../../Controllers/AddProductInDb.controller")
const router = express.Router();


router.post("/AddProdInDb" , AddProdinDb);

module.exports = router;

