const { default: mongoose } = require("mongoose");
const DoctorModel = require("../../../../Modals/DoctorModals/Doctor.modal");

const fetchAllDoctorDetails = async (req, res)=>{
      const Username = req.body.Username;
      console.log(Username);
      try {

            if (!mongoose.Types.ObjectId.isValid(Username)) {
              return res.status(200).json({ message: "Invalid object id" });
            }
            const DoctorResponse = await DoctorModel.findOne({
              Username: Username,});
            res.status(200).json({message:"Doctor info fetched" , DoctorDetails:DoctorResponse})
      } catch (error) {
            console.log(error)
            res.status(500).json({message:"Internal server error"})
      }
}

module.exports = fetchAllDoctorDetails;
