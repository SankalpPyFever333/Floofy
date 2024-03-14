const express = require("express");
const fetchAllDoctorList = require("../../Controllers/Doctor/FetchAllDoctorlist.controller");
const  router = express.Router();

router.get("/getAllDoctors" , fetchAllDoctorList);

module.exports = router;

