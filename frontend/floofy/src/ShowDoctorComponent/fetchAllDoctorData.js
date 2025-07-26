import { base_api } from "../base_api";

export const getDoctorAll = async () => {
  const response = await fetch(`${base_api}/api/getAllDoctors`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response) {
    throw new Error("Error in fetching doctors");
  }
  return response;
};
