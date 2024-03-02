
export const fetchAllPost = async ()=>{
      const fetchedPost = await fetch("http://localhost:3000/api/getAllPost", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if(fetchedPost.ok){
            console.log("post in the fetechJs:" , fetchedPost);
            return fetchedPost;
      }
      else{
            throw new Error('Error Fetching Posts');
      }
}
