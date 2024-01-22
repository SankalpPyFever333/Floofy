const express = require("express")
const router = express.Router();
const FirebaseOtpVerification = require("../../Controllers/LoginSignUpController/FirebaseOtpVerify.controller")

router.post("/FirebaseOtpVerify" , FirebaseOtpVerification)

module.exports = router;
