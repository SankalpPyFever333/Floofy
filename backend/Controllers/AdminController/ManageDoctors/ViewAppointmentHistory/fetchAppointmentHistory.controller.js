const AppointmentModel = require("../../../../Modals/DoctorModals/DoctorAppointment.modal");

const fetchDoctorAppointmenthistory = async (req, res)=>{
      // get acoording to which you want to see history
      const {doctorId} = req.body;
      console.log("Doctor id in controller:", doctorId);
      try {
            // we filter the data according to the view parameter like if it is on the pending status then we filter the pending appointments and show them. For now I am keeping it simple.

            const appointmentData = await AppointmentModel.find({
              Doctor: doctorId,
            })
              .populate("Doctor")
              .exec();
            res.status(200).json({appointmentHistory: appointmentData})
      } catch (error) {
            console.log(error);
            res.status(500).json({message:"Internal server error"})
      }
}

module.exports = fetchDoctorAppointmenthistory;
