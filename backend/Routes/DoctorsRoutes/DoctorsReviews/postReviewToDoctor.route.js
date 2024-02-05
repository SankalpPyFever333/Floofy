const postReviewDoctor = require("../../../Controllers/Doctor/postReviewController/postReviewToDoctor.controller");
const express = require("express")
const router  = express.Router();

router.post("/postReviewToDoctor" , postReviewDoctor);

module.exports = router;

