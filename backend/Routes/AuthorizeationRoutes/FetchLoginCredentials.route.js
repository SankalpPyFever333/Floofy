const express = require("express");
const fetchLoginCred = require("../../Controllers/LoginSignUpController/FetchLoginCred.controller");
const router = express.Router();

router.post("/fetchLoginCredentials" , fetchLoginCred)

module.exports = router;



