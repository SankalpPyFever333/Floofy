const express = require("express");
const deleteDoctorReview = require("../../../Controllers/AdminController/ManageDoctors/ManageReviewsOfDoctors/deleteDoctorReviews.controller");
const router = express.Router();

router.delete("/deleteDoctorReview" , deleteDoctorReview);

module.exports = router;

