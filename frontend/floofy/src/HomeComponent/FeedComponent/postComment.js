
export const postComment = async(comment , userId , ProductId)=>{
      const postCommentReponse = await fetch(
        "http://localhost:3000/api/addCommentToPost",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Comment: comment,
            User: userId,
            Product: ProductId,
            
          }),
        }
      );

      if(postCommentReponse.ok) {
            return await postCommentReponse.json();
      }
      else{
            throw new Error("Error in posting comment")
      }
}

