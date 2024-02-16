const DoctorModel = require("../../../../Modals/DoctorModals/Doctor.modal");
const AppointmentModel = require("../../../../Modals/DoctorModals/DoctorAppointment.modal");
const DoctorReviewModel = require("../../../../Modals/DoctorModals/DoctorsReview.model");

// in this  , code for removing the doctor when he do not met the certain criteria
const removeDoctor = async (req, res)=>{
      const { doctorId } = req.body;
      console.log(doctorId);
      try {

            // So when we remove the doctor , delete all the things associated with it like his reviews and appointmnet history.

            // delete all reviews:
            const reviewDeleteResult = await DoctorReviewModel.deleteMany({
              Doctor: doctorId,
            });

            //  delete all appointments of that doctor from the database and then delete the doctor himself
            const appointmentDeleteRes = await AppointmentModel.deleteMany({
              Doctor: doctorId,
            });


            const findDoctorByID = await  DoctorModel.findByIdAndDelete(doctorId);
            if(findDoctorByID){
                  res.status(200).json({message:"Doctor removed successfully"})
            }
            else{
                  res.status(400).json({message:"Doctor not found"});
            }
      } catch (error) {
            console.log(error);
            res.status(500).json({message:"Internal Server Error"})
      }
}

module.exports = removeDoctor;
