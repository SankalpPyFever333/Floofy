import { base_api } from "../../../../base_api";

export const fetchCompleteDetails = async (usernameObjectID) => {
  const responseDoctorData = await fetch(
    `${base_api}/api/fetchCompleteDoctorDetails`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Username: usernameObjectID }),
    }
  );

  if (!responseDoctorData.ok) {
    console.log("Error in fetching details", responseDoctorData.status);
  }
  console.log("Data in fethc js:", responseDoctorData);
  return responseDoctorData;
};
