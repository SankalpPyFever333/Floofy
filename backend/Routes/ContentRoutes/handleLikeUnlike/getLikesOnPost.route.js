const express = require("express");
const fetchFetchNumberOfLikes = require("../../../Controllers/ContentController/fetchNumberOfLIkes.controller");

const router = express.Router();

router.get("/getAllPostWithLikes" , fetchFetchNumberOfLikes);

module.exports = router;

