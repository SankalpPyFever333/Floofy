import {base_api} from  "../../base_api"
export const fetchAllDoctorsFromDb = async () => {
  const fetchedDoctorList = await fetch(`${ base_api }/api/fetchDoctorsFromDb`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!fetchedDoctorList.ok) {
    throw new Error("Error in fetching doctors");
  }
  return fetchedDoctorList;
};
