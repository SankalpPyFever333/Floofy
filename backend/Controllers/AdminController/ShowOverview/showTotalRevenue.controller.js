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
        const calculateRevenueLastWeek = await ProductOrder.aggregate([
          {
            $match: {
              createdAt: {
                $gte: new Date(startDateWeek),
                $lte: new Date(endDateWeek),
              },
              status: "delivered",
            },
          },
          {
            $group: {
              _id: null,
              totalAmount: { $sum: { $toInt: "$totalAmount" } },
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
        } else {
          res.status(200).json({
            message: "NO Data found for this period",
            revenue: 0,
          });
        }
        break;
      case "Last Month":
        const { LastMonthStartDate, LastMonthEndDate } =
          getLastMonthStartDate();
        const calculateRevenueLastMonth = await ProductOrder.aggregate([
          {
            $match: {
              createdAt: {
                $gte: new Date(LastMonthStartDate),
                $lte: new Date(LastMonthEndDate),
              },
              status: "delivered",
            },
          },
          {
            $group: {
              _id: null,
              totalAmount: { $sum: { $toInt: "$totalAmount" } },
            },
          },
        ]);
        if( Array.isArray(calculateRevenueLastMonth) && calculateRevenueLastMonth.length>0){
            res.status(200).json({message:"Product Found" , revenue: calculateRevenueLastMonth})
        }
        else{
            res.status(200).json( {message: "No Data for this period" , revenue:0})
        }
        break;
      case "Last Year":
            const { StartYear, EndYear } = getLastYear();
            const yearlySales = await ProductOrder.aggregate([
              {
                $match: {
                  createdAt: {
                    $gte: new Date(StartYear),
                    $lte: new Date(EndYear),
                  },
                  status: "delivered",
                },
              },
              {
                  $group:{
                        _id: null,
                        totalAmount: {
                              $sum: { $toInt: "$totalAmount" },
                        }
                  }
            }
            ]);
            if( Array.isArray(yearlySales)&& yearlySales.length>0){
                  res.status(200).json({message:"revenue calculated" , revenue: yearlySales})
            }
            else{
              res
                .status(200)
                .json({ messagae: "NO sales found for this period", revenue:0});
            }
        break;

      default:
        break;
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = totalRevenueCalculation;
