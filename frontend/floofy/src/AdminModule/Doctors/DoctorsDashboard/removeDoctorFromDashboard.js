

export const deleteDoctorByIDFromDb = async (doctorId) => {
  const deleteDoctorResponse = await fetch(
    "http://localhost:3000/api/deleteDoctorById",
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ doctorId: doctorId }),
    }
  );

  if(!deleteDoctorResponse.ok){
      return  false;
  }
  return true;
};



