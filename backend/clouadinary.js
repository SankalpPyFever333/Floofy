const express = require("express");
const addProductInDbAdminController = require("../../../Controllers/AdminController/ShopController/addProductINDbAdmin.controller");
const uploads = require("../../../upload");
const router = express.Router();

router.post(
  "/addProductInDbAdmin",
  uploads.single("file"),
  addProductInDbAdminController
);

module.exports = router;
