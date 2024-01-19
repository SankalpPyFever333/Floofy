const express = require("express")
const router = express.Router();

const updateNewPassword = require("../../Controllers/LoginSignUpController/ForgotPassword.controller")

// Import the controller also.

router.post("/updateNewPassword" , updateNewPassword)

module.exports = router;

