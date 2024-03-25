const express = require("express");
const createAppointmentOfDoctor = require("../../../Controllers/PaymentController/DoctorAppointmentController/createAppointmentWithDoctor.controller");
const router = express.Router();

router.post("/v1/orders" , createAppointmentOfDoctor);

module.exports = router

