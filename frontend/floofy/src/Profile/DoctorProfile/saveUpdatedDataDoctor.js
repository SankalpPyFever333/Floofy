import { base_api } from "../../base_api";

export const saveUpdatedDataDoctor = async (
  doctorId,
  name,
  username,
  phone,
  email,
  expereince,
  location,
  specialization,
  licenseId
) => {
  try {
    const saveDoctorData = await fetch(
      `${base_api}/api/EditDoctorProfileBio/${doctorId}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Name: name,
          Username: doctorId,
          Phone: phone,
          Email: email,
          Experience: expereince,
          Specialization: specialization,
          LocationOfDoctor: location,
          LicenseNumber: licenseId,
        }),
      }
    );

    if (saveDoctorData.ok) {
      return await saveDoctorData.json();
    } else {
      console.log("Error is ", saveDoctorData.status);
    }
  } catch (error) {
    console.log("Error in updaating: ", error);
  }
};
