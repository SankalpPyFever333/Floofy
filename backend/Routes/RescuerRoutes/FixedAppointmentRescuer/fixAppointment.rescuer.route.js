const express = require('express');
const fixAppointmentWithRescuer = require('../../../Controllers/RescuerController/RescuerAppointment/FixAppointmentWithRescuer.controller');
const router = express.Router();

router.post("/fix_Appointment_Rescuer" , fixAppointmentWithRescuer);

module.exports = router;

