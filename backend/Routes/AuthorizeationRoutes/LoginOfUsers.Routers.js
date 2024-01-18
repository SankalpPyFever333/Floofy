const express = require("express")
const router  = express.Router();
const fetchloginData = require("../../Controllers/LoginSignUpController/LoginOfUsers.controller"); 


router.post("/getLoginData" , fetchloginData);

module.exports = router



