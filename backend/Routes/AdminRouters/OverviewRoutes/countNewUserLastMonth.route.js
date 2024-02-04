const express = require("express");
const { countNewUsers } = require("../../../Controllers/AdminController/ShowOverview/showNumberofNewUser.controller");
const  router = express.Router();

router.get("/countNewUsers" , countNewUsers);

module.exports = router;

