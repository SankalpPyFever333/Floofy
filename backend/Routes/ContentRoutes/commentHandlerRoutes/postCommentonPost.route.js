const express = require("express");
const addCommentToPost = require("../../../Controllers/ContentController/PostHandlerModule/postComment.controller");
const router = express.Router();

router.post("/addCommentToPost" , addCommentToPost);

module.exports = router;

