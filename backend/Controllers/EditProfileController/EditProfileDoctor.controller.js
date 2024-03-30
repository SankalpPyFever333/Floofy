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
                  const updateDoctorDetails = await Doctor.findOneAndUpdate(
                    {
                      Username: new mongoose.Types.ObjectId(doctorId),
                    },
                    req.body,
                    {
                      new: true,
                    }
                  ); 
                  console.log("updateDoctorDetails",updateDoctorDetails)
                  if(!updateDoctorDetails){
                        return res.status(401).json({message:"No, user found"});
                  }
                  return res.status(200).json({message:"Updated successfully" , updatedProduct:updateDoctorDetails})
            } catch (error) {
                  console.log("Error occured: " , error);
                  res.status(400).json({message:"Server error occured" , error:error , updatedProduct:[]})
            }
}

module.exports = handleDoctorProfileUpdate;
