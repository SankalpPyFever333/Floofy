const express = require("express");
const fetchProductOrderToShowEdit = require("../../Controllers/PlaceOrderByUser/fetchProductOrderForEdit.controller");

const router = express.Router();
router.post("/fetchOrderForEditingShow" , fetchProductOrderToShowEdit);

module.exports = router;
