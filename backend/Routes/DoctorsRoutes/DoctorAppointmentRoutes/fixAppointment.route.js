const express = require("express");
const fixAppointment = require("../../../Controllers/Doctor/AppoinmentHandling/FixAppointment.controller");
const router = express.Router();

router.post("/fixAppointmentWithDoctor" , fixAppointment);

module.exports = router;