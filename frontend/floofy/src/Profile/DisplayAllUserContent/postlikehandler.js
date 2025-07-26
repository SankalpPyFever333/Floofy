import { base_api } from "../../base_api";

export const handleLikeOnPost = async (postId) => {
  const likeResponse = await fetch(`${base_api}/api/likeiunlikepost/${postId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId: localStorage.getItem("userId") }),
  });

  if (likeResponse.ok) {
    return await likeResponse.json();
  } else {
    return false;
  }
};
