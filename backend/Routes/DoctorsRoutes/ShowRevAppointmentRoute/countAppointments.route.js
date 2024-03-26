const express = require("express");
const countAppointment = require("../../../Controllers/Doctor/ShowAppointRevDoctor/countNumberOfAppointment.controller");
const router = express.Router();

router.post("/countAppintmentOfDoc" , countAppointment);
module.exports = router;