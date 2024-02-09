
export const fetchAllProductOrder = async ()=>{
      const AllOrders = await fetch(
        "http://localhost:3000/api/fetchProductOrder",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

        if(!AllOrders.ok){
            throw new Error("Could not get orders");
        }
      //   console.log("jsonOrder is: " , AllOrders.json())
        return AllOrders;
}
