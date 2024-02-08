const RescuerAppointmentModal = require("../../../Modals/RescuerModal/RescuerAppointment.model");

const fixAppointmentWithRescuer  = async (req, res)=>{
      const {
        User,
        Rescuer,
        AppointmentDate,
        Status,
        Payment,
        ReasonForAppointment,
      } = req.body;
      try {
            const newRescuerAppointment = new RescuerAppointmentModal({
              User,
              Rescuer,
              AppointmentDate,
              Status,
              Payment,
              ReasonForAppointment
            });
            await newRescuerAppointment.save();
            res.status(200).json({message:"Request fixed"})
      } catch (error) {
            console.log(error);
            res.status(500).json({message:"Internal server error"})
      }
}

module.exports = fixAppointmentWithRescuer;
