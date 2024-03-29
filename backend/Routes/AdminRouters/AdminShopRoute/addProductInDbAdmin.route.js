
const express = require("express");

const addProductInDbAdmin = require("../../../Controllers/AdminController/ShopController/addProductINDbAdmin.controller");
const uploads = require("../../../upload");
const router = express.Router();

router.post(
  "/addProductInDbAdmin",
  uploads.single("file"),
  addProductInDbAdmin
);

module.exports = router;
