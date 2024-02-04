const getLastYear = () => {
  const endDate = new Date();
  const startDate = new Date(endDate);
  startDate.setFullYear(endDate.getFullYear() - 1);
  return { startDate, endDate };
};
module.exports = getLastYear; 