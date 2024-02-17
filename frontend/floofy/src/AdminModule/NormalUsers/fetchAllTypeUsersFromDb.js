
export const allTypeUserResponse = async ()=>{
      const response = await fetch(
        "http://localhost:3000/api/fetchAllTypeUsers" , {
            method:"GET",
            headers:{
                  'Content-Type':"application/json"
            }
        }
      );

      if(!response.ok){
            throw new Error("HTTP-Error: " + response.status);
      }
      console.log("Al user response:" ,  response)
      return response;

}



