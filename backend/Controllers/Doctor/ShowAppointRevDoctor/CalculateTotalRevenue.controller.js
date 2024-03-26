const AppointmentModel = require("../../../Modals/DoctorModals/DoctorAppointment.modal");
const getLastMonthStartDate = require("../../AdminController/getLastDates/getLastMonth");
const getLastWeekDates = require("../../AdminController/getLastDates/getLastWeekDates");
const getLastYear = require("../../AdminController/getLastDates/getLastYearDates");


const CalTotalRevenue = async(getLastStartDate)=>{
      try {
            switch(getLastStartDate){
                  case "Last Week":
                        const { startDateWeek, endDateWeek } =  getLastWeekDates();
                        const lastWeekRevenue = await AppointmentModel.aggregate([
                              {
                                    $match: {
                                          createdAt:{
                                                $gte: new Date(startDateWeek),
                                                $lte : new Date(endDateWeek)
                                          }
                                    }
                              },
                              {
                                    $group:{
                                          _id: null,
                                          totalPaymentAmount: {$sum:{$toInt:"$paymentAmount"} }
                                    }
                              }
                        ]);
                        return lastWeekRevenue;

                  case "Last Month":
                        const { startDateMonth, endDateMonth } = getLastMonthStartDate();
                        const lastMonthRevenue =
                          await AppointmentModel.aggregate([
                            {
                              $match: {
                                createdAt: {
                                  $gte: new Date(startDateMonth),
                                  $lte: new Date(endDateMonth),
                                },
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
                        const lastYEarRevenue =
                          await AppointmentModel.aggregate([
                            {
                              $match: {
                                createdAt: {
                                  $gte: new Date(startDateYear),
                                  $lte: new Date(endDateYear),
                                },
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
}

const calTotalRevenueDoc = async(req, res)=>{
      const { getLastStartDate } = req.body;
      try {
            const totalRev = await CalTotalRevenue(getLastStartDate);
            console.log(totalRev);
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
