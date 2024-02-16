
export const fetchRescuerList = async ()=>{
      const fetchedRsponse = await fetch("", {
            method: "GET",
            headers:{
                  'Content-Type':"application/json"
            }
      });

      if(!fetchedRsponse.ok){
            throw new Error("Error in fetching data of rescuer")
      }
      return fetchedRsponse;
}

