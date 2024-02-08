const express = require("express");
const { countNewUsers } = require("../../../Controllers/AdminController/ShowOverview/showNumberofNewUser.controller");
const  router = express.Router();

router.post("/countNewUsers" , countNewUsers);

module.exports = router;

