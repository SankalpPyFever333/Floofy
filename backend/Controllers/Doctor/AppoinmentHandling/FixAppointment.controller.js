const AppointmentModel = require("../../../Modals/DoctorModals/DoctorAppointment.modal");

// in this , a user when click on the button for fixing appoinment then this will be executed.
const fixAppointment = async (req, res) => {
      const {
        User,
        Doctor,
        AppointmentDate,
        Status,
        Payment,
        ReasonForAppointment,
      } = req.body;
      // console.log(`userId: ${User} and doctorId is: ${Doctor}`)
      try {
            const newAppoinment = new AppointmentModel({
              User: User,
              Doctor: Doctor,
              Payment: Payment,
              ReasonForAppointment: ReasonForAppointment
            });
            await newAppoinment.save();
            res.status(201).json({message:"Appointment Fixed"})
      } catch (error) {
            console.log(error);
            res.status(500).json({message:"Internal Server Error"})
      }
}

module.exports = fixAppointment;



