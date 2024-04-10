const ProductOrder = require("../../../Modals/ProductOrder/ProductOrder.modal");
const getLastMonthStartDate = require("../getLastDates/getLastMonth");
const getLastWeekDates = require("../getLastDates/getLastWeekDates");
const getLastYear = require("../getLastDates/getLastYearDates");

const countProductTimeframe = async (
  getLastStartDate
) => {
  try {
    switch (getLastStartDate) {
      case "Last Week":
        const { startDateWeek, endDateWeek } = getLastWeekDates();
        const countProductLastWeek = await ProductOrder.aggregate([
          {
            $match: {
              createdAt: {
                $gte: new Date(startDateWeek),
                $lte: new Date(endDateWeek),
              },
              // status: "delivered",
            },
          },
          {
            $group: {
              _id: null,
              count: { $sum: 1 },
            },
          },
        ]);
        return countProductLastWeek;
        
      case "Last Month":
            const { startDateMonth, endDateMonth } = getLastMonthStartDate();
            const countProductLastMonth = await ProductOrder.aggregate([
              {
                $match: {
                  createdAt: {
                    $gte:  new Date(startDateMonth),
                    $lte: new Date(endDateMonth),
                  },
                  // status: "delivered",
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
                  // status: "delivered",
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
  const { getLastStartDate} = req.body;
  console.log(getLastStartDate)
  try {
      const productCount = await countProductTimeframe(getLastStartDate);
      console.log("Product count:" , productCount);
      if( Array.isArray(productCount) && productCount.length>0){
        
            res.status(200).json({message:"Product counted" , productCount: productCount[0].count})
            return productCount.length;
      }
      else{
            res
              .status(200)
              .json({ message: "No product found", productCount: 0 });
              return 0;
      }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
    return 0;
  }
};

module.exports = countProductSales;


// IN the main order component , also show data according to status like for pending , delivered , processing

