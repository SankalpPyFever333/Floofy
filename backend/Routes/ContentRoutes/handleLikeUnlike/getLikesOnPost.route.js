const express = require("express");
const fetchFetchNumberOfLikes = require("../../../Controllers/ContentController/fetchNumberOfLIkes.controller");

const router = express.Router();

router.post("/getAllPostWithLikes" , fetchFetchNumberOfLikes);

module.exports = router;

