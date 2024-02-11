
const AppointmentModel = require("../../../../Modals/DoctorModals/DoctorAppointment.modal");

// this function will return the total revenue of a doctor by his id
const getTotalRevenueByDoctor = async (req, res)=>{
      const {doctorId} = req.params;
      console.log(doctorId);
      try {
            // fetch all the paymentAmount of that doctorId and sum up that and return.
            const fetchTotalRevenue = await AppointmentModel.aggregate([
              {
                $match:{
                  Doctor: doctorId
                },
              },
              {
                $group: {
                  _id: "$Doctor",
                  totalRevenue: {
                    $sum:{
                        $toDouble: "$Payment.paymentAmount"
                    }
                  },
                },
              },
            ]);

            

            console.log("Fetch total revenue ",fetchTotalRevenue)
            if( Array.isArray(fetchTotalRevenue) && fetchTotalRevenue.length > 0){
                  const totalRevenue = fetchTotalRevenue[0].count;
                  console.log("Total revenue is " , totalRevenue);
                  res.status(200).json({message:"Revenue calculated" , totalRevenue: totalRevenue})
            }
            else{
                  res.status(200).json({message:"NO revenue genrated"})
            }
      } catch (error) {
            console.log(error);
            res.status(500).json({message:"Internal Server Error"})
      }
      // get the paymnet amount of this doctor having id(getting from the req body). find All documents with this id and  sum up all payment amounts.

}

module.exports = getTotalRevenueByDoctor;

// tommorrow complete the doctor module.

