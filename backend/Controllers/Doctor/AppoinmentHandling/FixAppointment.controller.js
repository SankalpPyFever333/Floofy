const { default: mongoose } = require("mongoose");
const AppointmentModel = require("../../../Modals/DoctorModals/DoctorAppointment.modal");

// in this , a user when click on the button for fixing appoinment then this will be executed.
const fixAppointment = async (req, res) => {
      const {
        User,
        ContactNumber,
        Doctor,
        DateOfAppointment,
        TimeOfAppointment,
        Payment,
        ReasonForAppointment,
      } = req.body;

      console.log(
        User,
        ContactNumber,
        Doctor,
        DateOfAppointment,
        TimeOfAppointment, 
        Payment,
        ReasonForAppointment
      );
      const file = req.file;
      console.log("File object: " , file);
      // console.log(`userId: ${User} and doctorId is: ${Doctor}`)
      try {
            const newAppoinment = new AppointmentModel({
              User: User,
              ContactNumber: ContactNumber,
              Doctor: new mongoose.Types.ObjectId(Doctor),
              paymentAmount: Payment,
              AppointmentDate: DateOfAppointment,
              TimeOfAppointment: TimeOfAppointment,
              PetImage: `http://localhost:3000/uploads/${file.originalname}`,
              ReasonForAppointment: ReasonForAppointment,
            });
            await newAppoinment.save();
            res.status(200).json({message:"Appointment Fixed"})
      } catch (error) {
            console.log(error);
            res.status(500).json({message:"Internal Server Error"})
      }
}

module.exports = fixAppointment;

