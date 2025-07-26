import { base_api } from "../../base_api";

export const postComment = async (comment, userId, postId) => {
  const postCommentReponse = await fetch(`${base_api}/api/addCommentToPost`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: comment,
      user: userId,
      post: postId,
    }),
  });

  if (postCommentReponse.ok) {
    return await postCommentReponse.json();
  } else {
    throw new Error("Error in posting comment");
  }
};
