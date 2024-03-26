const express = require("express");
const fixAppointment = require("../../../Controllers/Doctor/AppoinmentHandling/FixAppointment.controller");
const uploads = require("../../../upload");
const router = express.Router();


router.post("/fixAppointmentWithDoctor" , uploads.single("file") ,  fixAppointment);

module.exports = router;