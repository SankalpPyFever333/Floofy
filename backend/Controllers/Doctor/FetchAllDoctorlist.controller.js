const DoctorModel = require("../../Modals/DoctorModals/Doctor.modal");

const fetchAllDoctorList = async(req, res)=>{
      try {
            const fetchedDoctors = await DoctorModel.find({}).populate(
              "Username"
            );
            if(!fetchedDoctors) return res.status(401).json('No Doctors Found');
            res.status(200).json(fetchedDoctors);
      } catch (error) {
            console.log("eeror in fetching: " , error);
            res.send(500).json({message:"Server Error!!"})
      }
}

module.exports = fetchAllDoctorList;
