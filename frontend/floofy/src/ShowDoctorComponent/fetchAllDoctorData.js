export const getDoctorAll = async ()=>{
      const response = await fetch("http://localhost:3000/api/getAllDoctors" , {
            method : "GET",
            headers:{
                  'Content-Type':'application/json'
            }
      });
      if(!response){
            throw new Error("Error in fetching doctors")
      }
      return response;
}