const userLoginModel = require("../../../Modals/LoginCredentials.modal");
const getLastMonthStartDate = require("../getLastDates/getLastMonth");
const getLastWeekDates = require("../getLastDates/getLastWeekDates");
const getLastYear = require("../getLastDates/getLastYearDates")

const countNewUsers = async (req, res) => {
  const { getLastStartDate } = req.body;
  // in this variable , we have a value like last month , last year , last week , last six months.
  try {
    switch (getLastStartDate) {
      case "Last Week":
        // write logic for last week
        const { startDateWeek, endDateWeek } = getLastWeekDates();
        const countUsersLastWeek = await userLoginModel.countDocuments({
          createdAt: {
            $gte: new Date(startDateWeek),
            $lte: new Date(endDateWeek),
          },
        });
        if (countUsersLastWeek) {
          res.status(200).json({
            message: "user founds",
            userCount: countUsersLastWeek,
          });
          return countUsersLastWeek
        } else {
          res
            .status(200)
            .json({ messgae: "NO user found", userCount: 0 });
            return 0
        }
        
      case "Last Month":
        const lastMonthStartDate = getLastMonthStartDate();
        const countUsers = await userLoginModel.aggregate([
          {
            $match: {
              createdAt: { $gte: new Date(lastMonthStartDate) },
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
        if ( Array.isArray(countUsers) && countUsers.length > 0) {
          const newUsersCount = countUsers[0].count;
          console.log(
            `Numbers of users from the last month is ${newUsersCount}`
          );
          res
            .status(200)
            .json({ message: "Users counted last month", userCount: newUsersCount });
            return newUsersCount
        } else {
          console.log("No user found");
          res
            .status(200)
            .json({ message: "NO users found", userCount: 0 });
          return 0;
        }
        

      case "Last Year":
        const { startDateYear, endDateYear } = getLastYear();
        const countUsersLastYear = await userLoginModel.countDocuments({
          createdAt: {
            $gte: startDateYear,
            $lte: endDateYear,
          },
        });
        if (countUsersLastYear) {
          res.status(200).json({
            message: "user founds",
            userCount: countUsersLastYear,
          });
          return  countUsersLastYear;
        } else {
          res
            .status(200)
            .json({ messgae: "NO user found", userCount: 0 });
            return 0;
        }

      default:
      // by default show the data for the last year , that's why not using the break above the default.
    }
  } catch (error) {
    console.log("Error in counting users", error);
    res.status(500).json({ message: "Internal server error" });
    return 0;
  }
};

module.exports = { countNewUsers };

// next target is to count the number of sales last month also count the sale of a particular product.
