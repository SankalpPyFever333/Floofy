
export const fetchAppointmentHistory = async (doctorId)=>{
      const fetchAppointment = await fetch(
        "http://localhost:3000/api/fetchAppointmentHistory",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ doctorId: doctorId}),
        }
      );
      if(!fetchAppointment.ok){
            throw new Error("Error in fetching apppointment history!")
      }
      return fetchAppointment;
}

