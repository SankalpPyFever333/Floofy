const express = require("express");
const deleteDoctorReview = require("../../../Controllers/AdminController/ManageDoctors/ManageReviewsOfDoctors/deleteDoctorReviews.controller");
const router = express.Router();

router.delete("/delete_Doctor_Review" , deleteDoctorReview);

module.exports = router;

