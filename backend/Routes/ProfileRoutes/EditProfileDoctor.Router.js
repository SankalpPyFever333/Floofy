const express = require("express")
const AddDoctorProfileEdit = require("../../Controllers/EditProfileController/EditProfileDoctor.controller")
const router = express.Router()

router.post("/EditDoctorProfileBio" , AddDoctorProfileEdit )

module.exports = router;