const ProductOrder = require("../../../Modals/ProductOrder/ProductOrder.modal");
const getLastMonthStartDate = require("../getLastDates/getLastMonth");
const getLastWeekDates = require("../getLastDates/getLastWeekDates");
const getLastYear = require("../getLastDates/getLastYearDates");

const totalRevenueCalculation = async (req, res) => {
  const { getLastStartDate } = req.body;
  try {
    switch (getLastStartDate) {
      case "Last Week":
        const { startDateWeek, endDateWeek } = getLastWeekDates();
        console.log("Statrt Date Week:" , startDateWeek)
        console.log("End Date Week:" , endDateWeek)
        const calculateRevenueLastWeek = await ProductOrder.aggregate([
          {
            $match: {
              createdAt: {
                $gte: new Date(startDateWeek),
                $lte: new Date(endDateWeek),
              },
              // status: "processing",
            },
          },
          {
            $group: {
              _id: null,
              totalAmount: { $sum: { $toDouble: "$totalAmount" } },
            },
          },
        ]);
        if (
          Array.isArray(calculateRevenueLastWeek) &&
          calculateRevenueLastWeek.length > 0
        ) {
          res.status(200).json({
            message: "Revenue calculated",
            revenue: calculateRevenueLastWeek,
          });
          return calculateRevenueLastWeek[0].totalAmount;
        } else {
          res.status(200).json({
            message: "No Data for this period",
            revenue: [{ _id: null, totalAmount: 0 }],
          });
          return 0;
        }
        
      case "Last Month":
        const { LastMonthStartDate, LastMonthEndDate } = getLastMonthStartDate();
          console.log("Statrt Date Month:" , LastMonthStartDate)
        console.log("End Date Month:" , LastMonthEndDate)
        const calculateRevenueLastMonth = await ProductOrder.aggregate([
          {
            $match: {
              createdAt: {
                $gte: new Date(LastMonthStartDate),
                $lte: new Date(LastMonthEndDate),
              },
              // status: "processing",
            },
          },
          {
            $group: {
              _id: null,
              totalAmount: { $sum: { $toDouble: "$totalAmount" } },
            },
          },
        ]);
        console.log("Monthly sales ", calculateRevenueLastMonth)
        if( Array.isArray(calculateRevenueLastMonth) && calculateRevenueLastMonth.length>0){
            res.status(200).json({message:"Product Found" , revenue: calculateRevenueLastMonth})
            return calculateRevenueLastMonth[0].totalAmount;
        }
        else{
            res
              .status(200)
              .json({
                message: "No Data for this period",
                revenue: [{ _id: null, totalAmount: 0 }],
              });
              return 0;
        }
        
      case "Last Year":
            const { StartYear, EndYear } = getLastYear();
            const yearlySales = await ProductOrder.aggregate([
              {
                $match: {
                  createdAt: {
                    $gte: new Date(StartYear),
                    $lte: new Date(EndYear),
                  },
                  // status: "processing",
                },
              },
              {
                $group: {
                  _id: null,
                  totalAmount: {
                    $sum: { $toDouble: "$totalAmount" },
                  },
                },
              },
            ]);
            console.log("yearly sales is :" , yearlySales)
            if( Array.isArray(yearlySales)&& yearlySales.length>0){
                  res.status(200).json({message:"revenue calculated" , revenue: yearlySales})
                  return yearlySales[0].totalAmount;
            }
            else{
              res
                .status(200)
                .json({
                  messagae: "NO sales found for this period",
                  revenue: [{_id:null, totalAmount: 0 }],
                });
                return 0;
            }

      default:
        break;
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
    return 0;
  }
};

module.exports = totalRevenueCalculation;
