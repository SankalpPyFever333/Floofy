const express = require("express");
const postContent = require("../../../Controllers/ContentController/PostHandlerModule/postContent.controller");
const uploads = require("../../../upload");


const router = express.Router();

router.post("/createPost" , uploads.single("Image") ,  postContent);

module.exports = router;


