export const updateOrderStatus = async(orderId)=>{
      const updateStatus = await fetch("" , {
            method:"PUT",
            headers:{
                  'Content-Type':'application/json'
            },
            body: JSON.stringify({orderRowId:orderId})
      });

      if(updateStatus.ok){
            return updateStatus;
      }
      else{
            throw new console.error("Error in updating status");
      }
}