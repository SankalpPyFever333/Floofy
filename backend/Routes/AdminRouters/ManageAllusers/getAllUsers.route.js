const express = require("express")
const fetchAllUsers = require("../../../Controllers/AdminController/ManageAllTypeUser/fetchAllUser.controller")
const router = express.Router();

router.get("/fetchAllTypeUsers" , fetchAllUsers);

module.exports = router;
