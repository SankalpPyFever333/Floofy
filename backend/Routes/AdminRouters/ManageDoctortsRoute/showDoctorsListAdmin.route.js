const express = require("express");
const fetchDoctorsFromDb = require("../../../Controllers/AdminController/ManageDoctors/ViewDoctorsList/fetchDoctorsFromDbAdmin.controller");
const router = express.Router();

router.get("/fetchDoctorsFromDb" , fetchDoctorsFromDb);

module.exports = router;
