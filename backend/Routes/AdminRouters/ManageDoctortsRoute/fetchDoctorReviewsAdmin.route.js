const express = require("express");
const fetchReviewOfDoctors = require("../../../Controllers/AdminController/ManageDoctors/ManageReviewsOfDoctors/fetchDoctorsReview.controller");
const router =  express.Router();

router.post("/fetch_Doctors_Review" , fetchReviewOfDoctors);

module.exports = router;