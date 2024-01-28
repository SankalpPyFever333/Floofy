const express = require("express");
const deleteProductByAdmin = require("../../../Controllers/AdminController/ShopController/deleteProductAdmin.controller");
const router  = express.Router();

router.delete("/deleteProductByAdmin" , deleteProductByAdmin);
module.exports = router;

