export const postDoctorReview = async(rating, doctorId) => {
      const responsePOstReview = await fetch(
        "http://localhost:3000/api/postReviewToDoctor",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON({
            User: localStorage.getItem("userId"),
            Doctor: doctorId,
            rating: rating,
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

