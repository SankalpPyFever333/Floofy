import { base_api } from "../../../base_api";

export const deleteDoctorByIDFromDb = async (doctorId) => {
  const deleteDoctorResponse = await fetch(`${base_api}/api/deleteDoctorById`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ doctorId: doctorId }),
  });

  if (!deleteDoctorResponse.ok) {
    return false;
  }
  return true;
};
