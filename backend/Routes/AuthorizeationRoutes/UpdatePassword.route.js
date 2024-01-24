
const express = require("express");
const updateNewPassword = require("../../Controllers/LoginSignUpController/UpdatePassword.controller");
const router = express.Router();

router.post("/updatePassword" , updateNewPassword)

module.exports = router;