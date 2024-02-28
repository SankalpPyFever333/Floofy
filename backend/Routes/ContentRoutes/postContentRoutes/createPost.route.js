const express = require("express");
const postContent = require("../../../Controllers/ContentController/PostSchema/postContent.controller");

const router = express.Router();

router.post("/createPost" , postContent);

module.exports = router;


