export const fetchOrderForEdit = async(OrderId)=>{
      try {
            const OrderResponse = await fetch(
              "http://localhost:3000/api/fetchOrderForEditingShow",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ OrderId: OrderId }),
              }
            );
      
            if(OrderResponse.ok){
              return OrderResponse;
            }
            else{
                  throw new Error("Error in fetching order")
            }
      } catch (error) {
            console.log("Error occured" , error);
      }
}

