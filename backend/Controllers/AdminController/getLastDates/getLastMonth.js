const getLastMonthStartDate = () => {
  const now = new Date();
  const lastDate = new Date(now);
  lastDate.setMonth(lastDate.getMonth()-1)
  lastDate.setMonth(lastDate.getMonth()+1 , 0)
  console.log(`now is ${now}`);
  const lastMonth = new Date(now);
  const LastMonthStartDate = lastMonth.toISOString().replace("Z", "+00:00");
  lastMonth.setMonth(lastMonth.getMonth()-1);
  lastMonth.setDate(1);
  lastMonth.setHours(0, 0, 0, 0);
  console.log(`lastmonth Date in JS Date: ${lastMonth}`)
  const LastMonthEndDate = lastDate.toISOString().replace("Z", "+00:00");
  console.log(`lastmonth is ${LastMonthStartDate}`);
  console.log(`lastmonthDate is ${LastMonthEndDate}`);
  return {LastMonthStartDate , LastMonthEndDate};
};
module.exports = getLastMonthStartDate;