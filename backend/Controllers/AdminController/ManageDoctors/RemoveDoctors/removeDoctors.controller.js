const DoctorModel = require("../../../../Modals/DoctorModals/Doctor.modal");

// in this  , code for removing the doctor when he do not met the certain criteria
const removeDoctor = async (req, res)=>{
      const {doctorId} = req.body;
      console.log(doctorId);
      try {
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
