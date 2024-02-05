const express = require("express");
const fetchReviewOfDoctors = require("../../../Controllers/AdminController/ManageDoctors/ManageReviewsOfDoctors/fetchDoctorsReview.controller");
const router =  express.Router();

router.get("/fetchDoctorsReview" , fetchReviewOfDoctors);

module.exports = fetchReviewOfDoctors;