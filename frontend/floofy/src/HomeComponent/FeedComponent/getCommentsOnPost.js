export const getCommentsOnPost = async(postId)=>{
      const fetchAllComments = await fetch(
        "http://localhost:3000/api/fetchAllComments",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ postId: postId }),
        }
      );

      if(fetchAllComments.ok){
            
            return await fetchAllComments.json();
      }
}


