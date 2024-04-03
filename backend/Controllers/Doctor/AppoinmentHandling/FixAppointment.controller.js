const { default: mongoose } = require("mongoose");
const AppointmentModel = require("../../../Modals/DoctorModals/DoctorAppointment.modal");

// in this , a user when click on the button for fixing appoinment then this will be executed.
const fixAppointment = async (req, res) => {
      const {
        User,
        Doctor,
        DateOfAppointment,
        Payment,
        ReasonForAppointment,
      } = req.body;

      console.log(
        User,
        Doctor,
        DateOfAppointment,
        Payment,
        ReasonForAppointment
      );

      // handle the file handling bcoz not getting the file object.
      // think how can pass the doctor id and user id from the client to here.


      const file = req.file;
      console.log("File object: " , file);
      // console.log(`userId: ${User} and doctorId is: ${Doctor}`)
      try {
            const newAppoinment = new AppointmentModel({
              User: User,
              Doctor: new mongoose.Types.ObjectId(Doctor),
              paymentAmount: Payment,
              AppointmentDate: DateOfAppointment,
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


// Do fix appointment
