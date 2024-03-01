const express = require("express");
const fetchAllcomments = require("../../../Controllers/ContentController/PostHandlerModule/fetchAllComment.controller");
const router = express.Router();

router.post("/fetchAllComments" , fetchAllcomments);

module.exports = router;

