const ProductOrder = require("../../../Modals/ProductOrder/ProductOrder.modal");
const getLastMonthStartDate = require("../getLastDates/getLastMonth");
const getLastWeekDates = require("../getLastDates/getLastWeekDates");
const getLastYear = require("../getLastDates/getLastYearDates");

const countProductTimeframe = async (
  getLastStartDate , OrderStatus
) => {
  try {
    switch (getLastStartDate) {
      case "Last Week":
        const { startDateWeek, endDateWeek } = getLastWeekDates();
      //   const countProductLastWeek = await ProductOrder.aggregate([
      //     {
      //       $match: {
      //         createdAt: {
      //           $gte: startDateWeek,
      //           $lte: endDateWeek,
      //         },
      //         status: OrderStatus,
      //       },
      //     },
      //     {
      //       $group: {
      //         _id: null,
      //         count: { $sum: 1 },
      //       },
      //     },
      //   ]);
      const countProductLastWeek = await ProductOrder.countDocuments({
        createdAt: {
          $gte: startDateWeek,
          $lte: endDateWeek,
        },
      });
        return countProductLastWeek;
        
      case "Last Month":
            const { startDateMonth, endDateMonth } = getLastMonthStartDate();
            const countProductLastMonth = await ProductOrder.aggregate([
              {
                $match: {
                  createdAt: {
                    $gte: startDateMonth,
                    $lte: endDateMonth,
                  },
                  status: OrderStatus,
                },
              },
              {
                $group: {
                  _id: null,
                  count: {
                    $sum: 1,
                  },
                },
              },
            ]);
            return countProductLastMonth;
      case "Last year":
            const { startDateYear, endDateYear } = getLastYear();
            const countProductLastYear = await ProductOrder.aggregate([
              {
                $match: {
                  createdAt: {
                    $gte: startDateYear,
                    $lte: endDateYear,
                  },
                  status: OrderStatus,
                },
              },
              {
                $group: {
                  _id: null,
                  count: {
                    $sum: 1,
                  },
                },
              },
            ]);
            return countProductLastYear;
      default:
    }
  } catch (error) {
      console.log(error);
  }
};

const countProductSales = async (req, res) => {
  const { getLastStartDate  , OrderStatus} = req.body;
  console.log(getLastStartDate , OrderStatus)
  try {
      const productCount = await countProductTimeframe(getLastStartDate , OrderStatus);
      if(productCount){
            res.status(200).json({message:"Product counted" , productCount: productCount.length})
      }
      else{
            res.status(400).json({message:"No product found" , length:productCount.length})
      }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = countProductSales;


// IN the main order component , also show data according to status like for pending , delivered , processing

