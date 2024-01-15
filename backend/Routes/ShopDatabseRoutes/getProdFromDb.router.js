const express = require("express");
const getProdFromDb = require("../../Controllers/getProdFromDb.controller");
const router = express.Router();


router.get("/getProductFromShop" , getProdFromDb);

module.exports = router;


