// put the routes for the login and signup.
const express = require("express");
const AddUserLoginCred = require("../../Controllers/LoginSignUpController/AddLoginCredetials.controller");
const router = express.Router()

router.post("/addLoginCredentialsOfuser", AddUserLoginCred);
module.exports = router;


