export const CancelOrder = async(orderRowId)=>{
      const deletedOrder = await fetch(
        "http://localhost:3000/api/cancelOrder",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ OrderRowId: orderRowId }),
        }
      );

      if(deletedOrder.ok){
            return true;
      }
      else{
            return false;
      }
}

