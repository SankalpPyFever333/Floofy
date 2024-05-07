const AppointmentModel = require("../../../Modals/DoctorModals/DoctorAppointment.modal");
const getLastMonthStartDate = require("../../AdminController/getLastDates/getLastMonth");
const getLastWeekDates = require("../../AdminController/getLastDates/getLastWeekDates");
const getLastYear = require("../../AdminController/getLastDates/getLastYearDates");
const { default: mongoose } = require("mongoose");

const countNumberOFAppointment = async(getLastStartDate , doctorId)=>{
      try {
            switch(getLastStartDate){
                  case "Last Week":
                        const { startDateWeek, endDateWeek } = getLastWeekDates();
                        const countApppointmentLastWeek =
                          await AppointmentModel.aggregate([
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
                                count: { $sum: 1 },
                              },
                            },
                          ]);
                        return countApppointmentLastWeek;

                  case "Last Month":
                        const { LastMonthStartDate, LastMonthEndDate } =
                          getLastMonthStartDate();
                        const countAppointmentLastMonth =
                          await AppointmentModel.aggregate([
                            {
                              $match: {
                                createdAt: {
                                  $gte: new Date(LastMonthStartDate),
                                  $lt: new Date(LastMonthEndDate),
                                },
                                Doctor: new mongoose.Types.ObjectId(doctorId),
                              },
                            },
                            {
                              $group: {
                                _id: null,
                                count: { $sum: 1 },
                              },
                            },
                          ]);

                        return countAppointmentLastMonth;

                  case "Last year":
                        const { startDateYear, endDateYear } = getLastYear();
                        const countLastYearAppointment =
                          await AppointmentModel.aggregate([
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
                              $match: {
                                _id: null,
                                count: { $sum: 1 },
                              },
                            },
                          ]);
                        return countLastYearAppointment;
                  default:
            }
      } catch (error) {
            console.log("Error in fetching appointment: ", error);
      }
}


const countAppointment = async (req, res)=>{
      const { getLastStartDate, doctorIdBody } = req.body;
      const { doctorIdParams } = req.params;
      console.log("Doctor id in param", doctorIdParams);
      console.log("docxtor id", doctorIdBody);
      const doctorId = doctorIdParams ? doctorIdParams : doctorIdBody;
      console.log(getLastStartDate);
      try {
            const countAppointmentOfDoctor = await countNumberOFAppointment(
              getLastStartDate,
              doctorId
            );
            console.log(countAppointmentOfDoctor);
            if(Array.isArray(countAppointmentOfDoctor) && countAppointmentOfDoctor.length > 0){
                  res
                    .status(200)
                    .json({
                      message: "Appoitnment found",
                      countAppointment: countAppointmentOfDoctor[0].count,
                    });
            }
            else{
                  res
                    .status(200)
                    .json({
                      message: "NO appointment found",
                      countAppointment: 0,
                    });
            }
      } catch (error) {
            console.log("Server error occured!!")
            res.status(500).json({message:"Server error occured"})
      }
}

module.exports = countAppointment;

