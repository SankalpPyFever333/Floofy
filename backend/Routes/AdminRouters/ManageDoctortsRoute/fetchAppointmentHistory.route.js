const express = require("express");
const fetchDoctorAppointmenthistory = require("../../../Controllers/AdminController/ManageDoctors/ViewAppointmentHistory/fetchAppointmentHistory.controller");
const router = express.Router();

router.get("/fetchAppointmentHistory" , fetchDoctorAppointmenthistory);

module.exports = router;

