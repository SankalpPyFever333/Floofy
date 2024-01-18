const express = require("express")
const router  = express.Router();
const fetchloginData = require("../../Controllers/LoginSignUpController/LoginOfUsers.controller"); 


router.get("/getLoginData" , fetchloginData);

module.exports = router



