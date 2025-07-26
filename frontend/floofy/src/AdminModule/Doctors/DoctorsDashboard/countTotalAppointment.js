import { base_api } from "../../../base_api";

// this method may work when I have to show all the data to overview part.
export const totalAppointment = async (timeFrame) => {
  const response = await fetch(`${base_api}/api/countAppintmentOfDoc`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      getLastStartDate: timeFrame,
      doctorIdBody: localStorage.getItem("userId"),
    }),
  });
  if (response.ok) {
    return response;
  } else {
    throw new Error("Error in counting Appointment");
  }
};
