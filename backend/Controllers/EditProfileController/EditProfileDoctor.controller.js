const { default: mongoose } = require("mongoose");
const Doctor = require("../../Modals/DoctorModals/Doctor.modal")

const handleDoctorProfileUpdate = async (req, res)=>{
      const doctorId = req.params.doctorId;
      console.log(req.body);
      console.log(doctorId);
       if (!mongoose.Types.ObjectId.isValid(doctorId)) {
         return res.status(400).json({ message: "Invalid doctor ID" });
       }
            try {
                  let updateDoctorDetails = await Doctor.findOneAndUpdate(
                    {
                      Username: new mongoose.Types.ObjectId(doctorId),
                    },
                    req.body,
                    {
                      new: true,
                    }
                  ); 
                  if(!updateDoctorDetails){
                    updateDoctorDetails = await Doctor.create(req.body);
                  }
                  console.log("updateDoctorDetails",updateDoctorDetails)
                  return res.status(200).json({message:"Updated successfully" , updatedProduct:updateDoctorDetails})
            } catch (error) {
                  console.log("Error occured: " , error);
                  res.status(400).json({message:"Server error occured" , error:error , updatedProduct:[]})
            }
}

module.exports = handleDoctorProfileUpdate;
