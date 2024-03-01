const express = require("express");
const LikeUnlikecontoller = require("../../../Controllers/ContentController/PostHandlerModule/UnlikeLikeOnPost.controller");
const router = express.Router();

router.post("/likeiunlikepost" , LikeUnlikecontoller);

module.exports = router;
