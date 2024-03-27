export const totalAdminParamAppointment = async(timeFrame , doctorIdParam)=>{
      const responseApppointParam = await fetch(
        `http://localhost:3000/api/getTotalAppointAdminParams/${doctorIdParam}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ getLastStartDate: timeFrame }),
        }
      );

      if(responseApppointParam.ok){
            return responseApppointParam;
      }
      else{
            throw new Error("Error in getting total Appoint Doc param");
      }
}