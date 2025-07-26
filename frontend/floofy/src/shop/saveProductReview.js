import { base_api } from "../base_api";

export const SaveProdReviews = async (rating, content, user, productId) => {
  const saveReviews = await fetch(`${base_api}/api/postProductReview`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      User: user,
      Product: productId,
      Comment: content,
      Rating: rating,
    }),
  });

  if (saveReviews.ok) {
    return true;
  } else {
    throw new Error("Could not add review");
  }
};
