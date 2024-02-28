const express = require("express");
const getAllPost = require("../../../Controllers/ContentController/fetchAllPost/getAllPostDb.controller");

const router = express.Router();

router.get("/getAllPost" , getAllPost )

module.exports = router;
