const saveCompleteDoctorDetails = require("../../../Controllers/AdminController/ManageDoctors/ShowAllInfoDoctors/postCompleteDetails.controller");

const express=  require("express")
const router = express.Router();

router.post("/saveCompleteDoctorDetails" , saveCompleteDoctorDetails)

module.exports = router;