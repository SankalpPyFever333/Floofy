export const totalAppointment = async (timeFrame)=>{
      const response = await fetch(
        "http://localhost:3000/api/countAppintmentOfDoc",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ getLastStartDate : timeFrame}),
        }
      );
      if(response.ok){
            return response;
      }
      else{
            throw new Error("Error in counting Appointment")
      }
}