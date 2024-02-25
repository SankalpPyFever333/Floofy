const fetchAllDoctorDetails = require("../../../Controllers/AdminController/ManageDoctors/ShowAllInfoDoctors/fetchAllDetailsOfDoctors.controller");

const express = require("express")
const router = express.Router();

router.post("/fetchCompleteDoctorDetails" , fetchAllDoctorDetails);

module.exports = router;

