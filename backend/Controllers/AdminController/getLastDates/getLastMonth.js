// const getLastMonthStartDate = () => {
//   const now = new Date();
//   const lastDate = new Date(now);
//   lastDate.setMonth(lastDate.getMonth()-1)
//   lastDate.setMonth(lastDate.getMonth()+1 , 0)
//   console.log(`now is ${now}`);
//   const lastMonth = new Date(now);
//   const LastMonthStartDate = lastMonth.toISOString().replace("Z", "+00:00");
//   lastMonth.setMonth(lastMonth.getMonth()-1);
//   lastMonth.setDate(1);
//   lastMonth.setHours(0, 0, 0, 0);
//   console.log(`lastmonth Date in JS Date: ${lastMonth}`)
//   const LastMonthEndDate = lastDate.toISOString().replace("Z", "+00:00");
//   console.log(`lastmonth start date  ${LastMonthStartDate}`);
//   console.log(`lastmonthDate end  is ${LastMonthEndDate}`);
//   return {LastMonthStartDate , LastMonthEndDate};
// };
// module.exports = getLastMonthStartDate;


const getLastMonthStartDate = () => {
  const now = new Date();
  const lastMonthStartDate = new Date(now);
  lastMonthStartDate.setDate(now.getDate() - 30); // Set the date 30 days back from now
  lastMonthStartDate.setHours(0, 0, 0, 0); // Set the time to the start of the day (midnight)

  const endDate = new Date(now);
  endDate.setHours(23, 59, 59, 999); // Set the time to the end of the day

  const LastMonthStartDate = lastMonthStartDate.toISOString();
  const LastMonthEndDate = endDate.toISOString();

  console.log(`Last month start date: ${LastMonthStartDate}`);
  console.log(`End date: ${LastMonthEndDate}`);

  return { LastMonthStartDate, LastMonthEndDate };
};

module.exports = getLastMonthStartDate;
