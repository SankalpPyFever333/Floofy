const express = require("express");
const updateProductInDbByAdmin = require("../../../Controllers/AdminController/ShopController/updateProductInDb.controller");
const router = express.Router();

router.put("/updateProductInDbByAdmin/:productId" , updateProductInDbByAdmin);
module.exports = router;

