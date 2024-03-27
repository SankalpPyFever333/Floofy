export const totalRevenueDoctor = async(timeFrame)=>{
      const response = await fetch(
        "http://localhost:3000/api/calTotalRevenueDoc",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ getLastStartDate: timeFrame }),
        }
      );
      if(response.ok){
            return response;
      }
      else{
            throw new Error("Error in fetching amount")
      }
}

