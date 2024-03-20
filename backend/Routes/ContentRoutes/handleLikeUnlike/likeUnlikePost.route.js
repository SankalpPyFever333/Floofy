const express = require("express");
const LikeUnlikecontoller = require("../../../Controllers/ContentController/PostHandlerModule/UnlikeLikeOnPost.controller");
const router = express.Router();

router.put("/likeiunlikepost/:postId" , LikeUnlikecontoller);

module.exports = router;
