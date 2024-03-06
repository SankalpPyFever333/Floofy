const Doctor = require("../../Modals/DoctorModals/Doctor.modal")

const handleDoctorProfileUpdate = async (req, res)=>{
      const doctorId = req.params.doctorId;
      console.log(doctorId);
            try {
                  const updateDoctorDetails = await Doctor.findByIdAndUpdate(doctorId , req.body , {
                        new: true
                  }) 
                  if(!updateDoctorDetails){
                        return res.status(401).json({message:"Error in updating"});
                  }
                  return res.status(200).json({message:"Updated successfully" , updatedProduct:updateDoctorDetails})
            } catch (error) {
                  res.status(400).json({message:"Error in updating details." , error:error , updatedProduct:[]})
            }
}

module.exports = handleDoctorProfileUpdate;
