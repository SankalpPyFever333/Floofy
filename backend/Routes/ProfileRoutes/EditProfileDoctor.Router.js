const express = require("express");
const handleDoctorProfileUpdate = require("../../Controllers/EditProfileController/EditProfileDoctor.controller");

const router = express.Router()

router.put("/EditDoctorProfileBio/:doctorId" , handleDoctorProfileUpdate )

module.exports = router;