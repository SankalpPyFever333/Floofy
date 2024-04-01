export const postDoctorReview = async(doctorId) => {
      const responsePOstReview = await fetch(
        "http://localhost:3000/api/postReviewToDoctor",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            User: localStorage.getItem("userId"),
            Doctor: doctorId,
            rating: localStorage.getItem("DoctorRating"),
          }),
        }
      );

      if(responsePOstReview.ok){
            return responsePOstReview;
      }
      else{
            throw new Error("Error in posting review");
      }
}

