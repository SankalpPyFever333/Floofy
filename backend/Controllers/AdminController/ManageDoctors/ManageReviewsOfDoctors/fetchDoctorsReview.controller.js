const DoctorReviewModel = require("../../../../Modals/DoctorModals/DoctorsReview.model");

const fetchReviewOfDoctors = async (req, res)=>{
      const {doctorId} = req.body;
      try{
            const fetchedReview = await DoctorReviewModel.find({Doctor: doctorId}).populate("User Doctor") ; 
            res.status(200).json({Reviews: fetchedReview})
      }
      catch (error){
            console.log(error);
            res.status(500).json({messgae:"Internal server error"})
      }
}

module.exports = fetchReviewOfDoctors;


