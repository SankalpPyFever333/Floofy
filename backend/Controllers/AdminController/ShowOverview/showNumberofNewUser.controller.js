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
            $gte: startDateWeek,
            $lte: endDateWeek,
          },
        });
        if (countUsersLastWeek) {
          res
            .status(200)
            .json({
              message: "user founds",
              countLastWeekUser: countUsersLastWeek,
            });
        } else {
          res.status(400).json({ messgae: "NO user found" });
        }
        break;
      case "Last Month":
        const lastMonthStartDate = getLastMonthStartDate();
        const countUsers = await userLoginModel.aggregate([
          {
            $match: {
              createdAt: { $gte: lastMonthStartDate },
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
        if (countUsers.length > 0) {
          const newUsersCount = countUsers[0].count;
          console.log(
            `Numbers of users from the last month is ${newUsersCount}`
          );
          res
            .status(200)
            .json({ message: "Users counted last month", userCount: newUsersCount });
        } else {
          console.log("No user found");
          res.status(400).json({ message: "NO users found" });
          return 0;
        }
        break;

      case "Last Year":
        //logic for last year count:
        const { startDateYear, endDateYear } = getLastYear();
        const countUsersLastYear = await userLoginModel.countDocuments({
          createdAt: {
            $gte: startDateYear,
            $lte: endDateYear,
          },
        });
        if (countUsersLastYear) {
          res
            .status(200)
            .json({
              message: "user founds",
              countLastWeekUser: countUsersLastYear,
            });
        } else {
          res.status(400).json({ messgae: "NO user found" });
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
