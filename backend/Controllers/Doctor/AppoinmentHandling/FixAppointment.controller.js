const AppointmentModel = require("../../../Modals/DoctorModals/DoctorAppointment.modal");

// in this , a user when click on the button for fixing appoinment then this will be executed.
const fixAppointment = async (req, res) => {
      const {
        CustomerName,
        Doctor,
        DateOfAppointment,
        Status,
        Payment,
        ReasonForAppointment,
      } = req.body;
      const file = req.file;
      // console.log(`userId: ${User} and doctorId is: ${Doctor}`)
      try {
            const newAppoinment = new AppointmentModel({
              User: CustomerName,
              Doctor: Doctor,
              paymentAmount: Payment,
              AppointmentDate: DateOfAppointment,
              PetImage: `http://localhost:3000/uploads/${file.originalname}`,
              Status: Status,
              ReasonForAppointment: ReasonForAppointment,
            });
            await newAppoinment.save();
            res.status(201).json({message:"Appointment Fixed"})
      } catch (error) {
            console.log(error);
            res.status(500).json({message:"Internal Server Error"})
      }
}

module.exports = fixAppointment;


// Do fix appointment
