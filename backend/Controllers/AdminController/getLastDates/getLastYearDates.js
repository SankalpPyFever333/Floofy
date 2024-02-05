const getLastYear = () => {
  const endDate = new Date();
  const startDate = new Date(endDate);
  startDate.setFullYear(endDate.getFullYear() - 1);
  const formatStartDateYear = startDate.toISOString().replace("Z", "+00:00");
  const formatEndtDateYear = startDate.toISOString().replace("Z", "+00:00");
  return { formatStartDateYear, formatEndtDateYear };
};
module.exports = getLastYear; 