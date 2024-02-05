const Doctor = require("../../Modals/DoctorModals/Doctor.modal")

const AddDoctorProfileEdit = async (req, res)=>{
      const {Name,
            Username,
            Phone,
            Email,
            Experience,
            Education,
            Specialization,
            SocialMediaLink} =  req.body;

            try {
                  const newDoctorInfo = new Doctor({
                    Name,
                    Username,
                    Phone,
                    Email,
                    Experience,
                    Education,
                    Specialization,
                    SocialMediaLink,
                  });
                  await newDoctorInfo.save();
                  res.status(200).json({message:"Profile updated"})
            } catch (error) {
                  res.status(400).json({message:"Error in updating details."})
            }
}

module.exports = AddDoctorProfileEdit;
