
const express = require("express");
const getProductReview = require("../../Controllers/ProductReviewController/getProductReview.controller");
const router = express.Router();

router.get("/getproductReview" , getProductReview);

module.exports = router;


