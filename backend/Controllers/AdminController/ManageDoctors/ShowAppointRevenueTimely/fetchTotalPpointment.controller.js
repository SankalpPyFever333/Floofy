const AppointmentModel = require("../../../../Modals/DoctorModals/DoctorAppointment.modal");
const getLastMonthStartDate = require("../../getLastDates/getLastMonth");
const getLastWeekDates = require("../../getLastDates/getLastWeekDates");
const getLastYear = require("../../getLastDates/getLastYearDates");

const countTotalAppointment = async (req, res) => {
  const { getLastStartDate } = req.body;

  try {
    switch (getLastStartDate) {
      case "Last Week":
        const { startDateWeek, endDateWeek } = getLastWeekDates();
        const totalAppointLastWeek = await AppointmentModel.countDocuments({
          createdAt: {
            $gte: new Date(startDateWeek),
            $lte: new Date(endDateWeek),
          },
          Status: "completed",
        });

        if(totalAppointLastWeek){
            res.status(200).json({message:"Appoint fetched last week" , AppointCounts: totalAppointLastWeek});
        }
        else{
            res.status(400).json({message:"NO appointment Found"})
        }

      case "Last Month":

      case "Last Year":
    }
  } catch (error) {}
};
