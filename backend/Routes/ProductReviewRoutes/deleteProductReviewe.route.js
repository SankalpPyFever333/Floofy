
const express = require("express");
const deleteProductReview = require("../../Controllers/ProductReviewController/deleteProductReview.controller");
const router = express.Router();

router.delete("/deleteProductReview" , deleteProductReview);

module.exports = router;

