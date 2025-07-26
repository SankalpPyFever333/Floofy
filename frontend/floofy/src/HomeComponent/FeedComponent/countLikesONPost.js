import { base_api } from "../../base_api";

export const CountNumberOfLikes = async (postId) => {
  const response = await fetch(`${base_api}/api/getAllPostWithLikes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ postId: postId }),
  });
  if (response.ok) {
    return response;
  } else {
    throw new Error("HTTP-Error: ", response.status);
  }
};
