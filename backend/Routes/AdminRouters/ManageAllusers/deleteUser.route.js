
const express = require("express");
const deleteUserFromDb = require("../../../Controllers/AdminController/ManageAllTypeUser/DeleteSelectedUser.controller");
const router = express.Router();

router.delete("/deleteSelectedUser", deleteUserFromDb);
module.exports = router;

