import { base_api } from "../base_api"

export const fetchReviewOfProduct = async (productId) => {
  const ReviewReponse = await fetch(`${base_api}/api/getReviewsWithUserName`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ProductId: productId }),
  });

  if (ReviewReponse.ok) {
    return ReviewReponse;
  } else {
    throw new Error("Could not find product reviews");
  }
};
