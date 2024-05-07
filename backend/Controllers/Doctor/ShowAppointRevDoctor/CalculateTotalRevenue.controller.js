const { default: mongoose } = require("mongoose");
const AppointmentModel = require("../../../Modals/DoctorModals/DoctorAppointment.modal");
const getLastMonthStartDate = require("../../AdminController/getLastDates/getLastMonth");
const getLastWeekDates = require("../../AdminController/getLastDates/getLastWeekDates");
const getLastYear = require("../../AdminController/getLastDates/getLastYearDates");
// const { ObjectId } = require("mongoose").Types;


const CalTotalRevenue = async (getLastStartDate, doctorId) => {
  try {
    switch (getLastStartDate) {
      case "Last Week":
        const { startDateWeek, endDateWeek } = getLastWeekDates();
        const lastWeekRevenue = await AppointmentModel.aggregate([
          {
            $match: {
              createdAt: {
                $gte: new Date(startDateWeek),
                $lte: new Date(endDateWeek),
              },
              Doctor: new mongoose.Types.ObjectId(doctorId),
            },
          },
          {
            $group: {
              _id: null,
              totalPaymentAmount: { $sum: { $toInt: "$paymentAmount" } },
            },
          },
        ]);
        return lastWeekRevenue;

      case "Last Month":
        const { LastMonthStartDate, LastMonthEndDate } =
          getLastMonthStartDate();
        const lastMonthRevenue = await AppointmentModel.aggregate([
          {
            $match: {
              createdAt: {
                $gte: new Date(LastMonthStartDate),
                $lte: new Date(LastMonthEndDate),
              },
              Doctor: new mongoose.Types.ObjectId(doctorId),
            },
          },
          {
            $group: {
              _id: null,
              totalPaymentAmount: {
                $sum: { $toInt: "$paymentAmount" },
              },
            },
          },
        ]);
        return lastMonthRevenue;
      case "Last Year":
        const { startDateYear, endDateYear } = getLastYear();
        const lastYEarRevenue = await AppointmentModel.aggregate([
          {
            $match: {
              createdAt: {
                $gte: new Date(startDateYear),
                $lte: new Date(endDateYear),
              },
              Doctor: new mongoose.Types.ObjectId(doctorId),
            },
          },
          {
            $group: {
              _id: null,
              totalPaymentAmount: {
                $sum: { $toInt: "$paymentAmount" },
              },
            },
          },
        ]);
        return lastYEarRevenue;
      default:
    }
  } catch (error) {
    console.log(error);
  }
};

const calTotalRevenueDoc = async(req, res)=>{
      const { getLastStartDate , doctorIdBody} = req.body;
      const { doctorIdParams } = req.params;
      console.log("Doctor id in param", doctorIdParams);
      console.log("docxtor id",doctorIdBody);

      const doctorId = doctorIdParams ? doctorIdParams : doctorIdBody;

      try {
            const totalRev = await CalTotalRevenue(getLastStartDate, doctorId );
            console.log("total rev",totalRev);
            if(totalRev){
                  res.status(200).json({message:"Total revenue fetched" , totalRev:totalRev})
            }
            else{
                  res
                    .status(200)
                    .json({ message: "No revenue generated", totalRev: 0 });
            }
      } catch (error) {
            console.log("Server Error " , error);
            res.status(500).json({message:"Server Error"})
      }
}

module.exports = calTotalRevenueDoc;
