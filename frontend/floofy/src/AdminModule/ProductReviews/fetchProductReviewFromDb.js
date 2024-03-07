
export const fetchProductReviews = async ()=>{
      const prodReviews = await fetch(
        "http://localhost:3000/api/getproductReview",
        {
          method: "GET",
          headers: {
            "Content-Type": "appplication/json",
          },
        }
      );

      if(!prodReviews.ok){
            console.log("error in fetching" , prodReviews.status)
            throw new Error("Error in fetching product reviews")
      }

      return prodReviews;
}

