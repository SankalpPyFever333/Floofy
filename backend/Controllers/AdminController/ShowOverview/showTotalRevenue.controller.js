const ProductOrder = require("../../../Modals/ProductOrder/ProductOrder.modal");
const getLastMonthStartDate = require("../getLastDates/getLastMonth");
const getLastWeekDates = require("../getLastDates/getLastWeekDates");
const getLastYear = require("../getLastDates/getLastYearDates");

const totalRevenueCalculation = async (req , res)=>{
      const { getLastStartDate } = req.body;
      try {
            switch (getLastStartDate) {
                  case "Last Week":
                              const { startDateWeek, endDateWeek } = getLastWeekDates();
                              const calculateRevenueLastWeek = await ProductOrder.aggregate([
                                    {
                                          $match: {
                                                createdAt:{
                                                      $gte : new Date(startDateWeek),
                                                      $lte: new Date(endDateWeek)
                                                } , 
                                                status: "delivered"
                                          }
                                    }, 
                                    {
                                          $group: { _id : null , totalAmount: {$sum : {$toInt:  "$totalAmount"}} }
                                    }

                              ]);
                              if(calculateRevenueLastWeek){
                                    res.status(200).json({message:"Revenue calculated" , revenue: calculateRevenueLastWeek})
                              }
                              else{
                                    res.status(400).json({message:"NO revenue"})
                              }
                        break;
                  case "Last Month":
                        
                        break;
                  case "Last Year":
                        
                        break;
            
                  default:
                        break;
            }
      } catch (error) {
            console.log(error)
            res.status(500).json({message:"Internal server error"})
      }
}


module.exports = totalRevenueCalculation;