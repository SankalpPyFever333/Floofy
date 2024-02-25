// const DoctorModel = require("../../../../Modals/DoctorModals/Doctor.modal");
const userLoginModel = require("../../../../Modals/LoginCredentials.modal");


const fetchDoctorsFromDb = async (req, res)=>{
      try {
            const doctorsList = await userLoginModel.find({userType: "Doctor"})
            console.log("Doctor list is " , doctorsList)
            res.status(200).json({doctors: doctorsList})
      } catch (error) {
            console.log(error);
            res.status(500).json({message:"Internal Server Error"})
      }
}

module.exports = fetchDoctorsFromDb;
