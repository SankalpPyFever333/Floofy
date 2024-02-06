const DoctorReviewModel = require("../../../../Modals/DoctorModals/DoctorsReview.model");

const deleteDoctorReview = async (req, res)=>{
      const {reviewObjectId} =  req.body;
      try {
            const findDoctorReviewAndDelete =  await DoctorReviewModel.findByIdAndDelete(reviewObjectId);
            if(findDoctorReviewAndDelete){
                  res.status(200).json({message:"Review deleted successfully"})
            }
            else{
                  res.status(400).json({message:"Doctor review not found"})
            }
      } catch (error) {
            console.log(error)
            res.status(500).json({message:"Internal server error"})
      }
}

module.exports = deleteDoctorReview;

