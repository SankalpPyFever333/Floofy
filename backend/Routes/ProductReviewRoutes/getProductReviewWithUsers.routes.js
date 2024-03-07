const express = require("express");
const getProductreviewWithUsername = require("../../Controllers/ProductReviewController/getProductReviewWithUsername.controller");
const router = express.Router();

router.post("/getReviewsWithUserName" , getProductreviewWithUsername);

module.exports = router;

