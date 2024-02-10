
export const fetchAllDoctorsFromDb = async()=>{
      const fetchedDoctorList = await fetch(
        "http://localhost:3000/api/fetchDoctorsFromDb" , {
            method:"GET",
            headers:{
                  'Content-Type':"application/json"
            }
        }
      );

      if(!fetchedDoctorList.ok){
            throw new Error("Error in fetching doctors");
      }
      return fetchedDoctorList;

}

