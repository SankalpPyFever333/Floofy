const express = require("express");
const removeDoctor = require("../../../Controllers/AdminController/ManageDoctors/RemoveDoctors/removeDoctors.controller");
const router = express.Router();

router.delete("/deleteDoctorById" , removeDoctor);

module.exports = router;

