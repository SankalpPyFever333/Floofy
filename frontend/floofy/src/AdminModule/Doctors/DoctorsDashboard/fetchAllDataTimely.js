const { response } = require("express");

const fetchTotalAppointRevenue = async(timeFrame)=>{
      let TotalRevenue , TotalAppointment;
      TotalRevenue = await fetchTotalRevenue(timeFrame);
      TotalAppointment = await fetchTotalAppointment(timeFrame);

      return {TotalRevenue , TotalAppointment}


}


const fetchTotalRevenue = async(timeFrame)=>{
      const totalRevenueResponse = await fetch("" , {
            method:"POST",
            headers:{
                  'Content-Type':"application/json"
            },
            body: JSON.stringify({getLastStartDate: timeFrame})
      })

      if(totalRevenueResponse.ok){
            const jsonTotalRevenue  = await totalRevenueResponse.json();
            console.log("json total revenue: " , jsonTotalRevenue);
            return jsonTotalRevenue;
      }
      else{
            console.log("Error occured: " , response.status);
      }

}

const fetchTotalAppointment = async(timeFrame)=>{
      const ResponseTotalApoint = await fetch("" , {
            method:"POST",
            headers:{
                  'Content-Type':"application/json"
            },
            body:JSON.stringify({getLastStartDate: timeFrame})
      });

      if(ResponseTotalApoint.ok){
            const jsonAppointment = await  ResponseTotalApoint.json();
            console.log("jsonAppointment: ", jsonAppointment);
            return jsonAppointment;
      }
      else{
            console.log("Error occurend in fetching total appointmnet")
      }
}

module.exports = fetchTotalAppointRevenue;

