const AppointmentModel = require("../../../../Modals/DoctorModals/DoctorAppointment.modal");

// this function will return the total revenue of a doctor by his id
const getTotalRevenueByDoctor = async (req, res)=>{
      const {doctorId} = req.params.doctorId;
      console.log(doctorId);
      try {
            // fetch all the paymentAmount of that doctorId and sum up that and return.
      } catch (error) {
            console.log(error);
            res.status(500).json({message:"Internal Server Error"})
      }
      // get the paymnet amount of this doctor having id(getting from the req body). find All documents with this id and  sum up all payment amounts.

}

module.exports = getTotalRevenueByDoctor;



