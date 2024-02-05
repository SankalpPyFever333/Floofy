const getLastWeekDates = () => {
  const endDate = new Date();
  const startDate = new Date(endDate);
  startDate.setDate(endDate.getDate() - 7);
  const startDateWeek = startDate.toISOString().replace("Z", "+00:00");
  const endDateWeek = endDate.toISOString().replace("Z", "+00:00");
  console.log(startDateWeek)
  console.log(endDateWeek)
  // return { startDateWeek, endDateWeek };
  return {startDateWeek ,endDateWeek}
};
module.exports = getLastWeekDates;