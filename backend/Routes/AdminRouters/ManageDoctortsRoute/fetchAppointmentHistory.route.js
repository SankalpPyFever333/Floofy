const express = require("express");
const fetchDoctorAppointmenthistory = require("../../../Controllers/AdminController/ManageDoctors/ViewAppointmentHistory/fetchAppointmentHistory.controller");
const router = express.Router();

router.post("/fetchAppointmentHistory" , fetchDoctorAppointmenthistory);

module.exports = router;

