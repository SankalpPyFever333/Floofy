
const fetchAllDataFromDb = async(timeFrame)=>{
      let purchaseData , revenueData , ActiveUserSData;
      ActiveUserSData = await fetchActiveUsersData(timeFrame);
      purchaseData = await fetchProductSalesData(timeFrame);
      revenueData  = await calculateRevenueData(timeFrame) ;
      return {ActiveUserSData, purchaseData , revenueData }
}


const fetchActiveUsersData = async (timeFrame) => {
      const fetchedActiveUsers = await fetch(
        "http://localhost:3000/api/countNewUsers",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ getLastStartDate: timeFrame }),
        }
      );

      if(fetchedActiveUsers.ok){
            const jsonActiveUsers = await fetchedActiveUsers.json();
            console.log( "json data from db of Active users" ,jsonActiveUsers);
            return jsonActiveUsers;
      }
      else{
            console.log("Some errror occured in fetcing active users ")
      }

}

const fetchProductSalesData = async (timeFrame)=>{
      const fetchedProductSales = await fetch(
        "http://localhost:3000/api/countProductSales",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ getLastStartDate:timeFrame }),
        }
      );

      if (fetchedProductSales.ok) {
        const jsonFetchedProductData = await fetchedProductSales.json();
        console.log("fetched product sales data", jsonFetchedProductData);
        return jsonFetchedProductData;
      } else {
        throw new Error("Server response was not OK");
      }
}


const calculateRevenueData = async (timeFrame)=>{
      const fetchTotalRevenue = await fetch(
        "http://localhost:3000/api/calculateRevenueGenerated",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ getLastStartDate: timeFrame}),
        }
      );
       if(fetchTotalRevenue.ok){
            const jsonFetchedRevenue = await  fetchTotalRevenue.json() ; 
            console.log("revenue data ", jsonFetchedRevenue)
            return jsonFetchedRevenue;
       }
       else{
            throw new Error("error in fetching revenue data")
       }
}



export default fetchAllDataFromDb;
