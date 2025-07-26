import { base_api } from "../base_api";

export const postDoctorReview = async (doctorId, rating) => {
  const responsePOstReview = await fetch(`${base_api}/api/postReviewToDoctor`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      User: localStorage.getItem("userId"),
      Doctor: doctorId,
      rating: rating,
    }),
  });

  if (responsePOstReview.ok) {
    console.log("Review Data is: ", responsePOstReview);
    return responsePOstReview;
  } else {
    throw new Error("Error in posting review");
  }
};
