const DoctorReviewModel = require("../../../Modals/DoctorModals/DoctorsReview.model");

const postReviewDoctor = async (req, res)=>{
      const {User , Doctor , rating} = req.body;
      try {
            const postedreview = new DoctorReviewModel({
              User: User,
              Doctor: Doctor,
              rating: rating,
              
            });
            await postedreview.save();
            res.status(200).json({messgae:"Review posted"})
      } catch (error) {
            console.log(error);
            res.status(500).json({message:"Internal Server Error"})
      }
}

module.exports = postReviewDoctor

