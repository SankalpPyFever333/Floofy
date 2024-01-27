const express = require("express");
const updateProductInDb = require("../../../Controllers/AdminController/ShopController/getProductINDbAdmin.controller");

const router = express.Router();

router.get("/fetchProductShowModal/:productId" , updateProductInDb)

module.exports = router;
