const express = require("express");
const postProductReview = require("../../Controllers/ProductReviewController/postProductReview.controller");
const router = express.Router();

router.post("/postProductReview" , postProductReview);

module.exports = router;



