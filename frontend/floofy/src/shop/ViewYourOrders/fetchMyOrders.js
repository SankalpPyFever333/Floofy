export const fetchMyOrders = async(userId)=>{
      const OrderResponse = await fetch(
        "http://localhost:3000/api/fetchMyProductOrder",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId: userId }),
        }
      );

      if(OrderResponse.ok){
            return OrderResponse;
      }
      else{
            throw new Error("Error in fetching my orders")
      }
}

