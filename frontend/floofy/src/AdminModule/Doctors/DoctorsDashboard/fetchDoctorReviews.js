
export const fetchDoctorsReview = async (doctorId) =>{
      console.log("Doctor in fetchedReview method: " , doctorId)

      try {
            const fetchReview = await fetch(
              "http://localhost:3000/api/fetch_Doctors_Review",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ doctorId: doctorId }),
              }
            );
      
            if(!fetchReview.ok){

                 return console.log("Response status", fetchReview.status);
            }
            console.log("review of doctor: " , fetchReview)
            return fetchReview;
      } catch (error) {
            console.log("Error:",error);
      }

}

