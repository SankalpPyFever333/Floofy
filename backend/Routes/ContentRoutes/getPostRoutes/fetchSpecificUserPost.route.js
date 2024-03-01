const express = require("express");
const fetchSpecificUserPost = require("../../../Controllers/ContentController/fetchAllPost/fetchSpecificUserContent.controller");
const router = express.Router();

router.post("/fetchSpecificUserPost" , fetchSpecificUserPost);

module.exports = router;
