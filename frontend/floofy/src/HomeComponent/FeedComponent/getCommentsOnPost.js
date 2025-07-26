import { base_api } from "../../base_api";

export const getCommentsOnPost = async (postId) => {
  const fetchAllComments = await fetch(`${base_api}/api/fetchAllComments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ postId: postId }),
  });

  if (fetchAllComments.ok) {
    return await fetchAllComments.json();
  }
};
