
export const handleLikeOnPost = async (postId)=>{
      const likeResponse = await fetch(
        `http://localhost:3000/api/likeiunlikepost/${postId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId: localStorage.getItem("userId") }),
        }
      );

      if(likeResponse.ok){
        
            return await likeResponse.json();
      }
      else{
        return false;
      }

}


