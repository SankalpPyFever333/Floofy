
const express = require("express");
const addProductInDbAdmin = require("../../../Controllers/AdminController/ShopController/addProductINDbAdmin.controller");
const router = express.Router();

router.post("/addProductInDbAdmin" , addProductInDbAdmin);

module.exports = router;

