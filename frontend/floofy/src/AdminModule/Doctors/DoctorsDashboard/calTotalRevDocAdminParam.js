import { base_api } from "../../../base_api";

// call this method when the id which you getting from the url is not null in the total revenue card
export const totalRevenueDoctorAdminParam = async (
  timeFrame,
  doctorIdParams
) => {
  const response = await fetch(
    `${base_api}/api/calTotalRevenueDoc/${doctorIdParams}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        getLastStartDate: timeFrame,
      }),
    }
  );
  if (response.ok) {
    return response;
  } else {
    throw new Error("Error in fetching amount");
  }
};
