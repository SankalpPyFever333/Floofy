const getLastSixMonthsDates = () => {
  const endDate = new Date();
  const startDate = new Date(endDate);
  startDate.setMonth(endDate.getMonth() - 6);
  return { startDate, endDate };
};
module.exports = getLastSixMonthsDates;