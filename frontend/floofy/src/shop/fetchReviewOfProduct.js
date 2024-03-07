export const fetchReviewOfProduct = async (productId)=>{
      const ReviewReponse = await fetch(
        "http://localhost:3000/api/getReviewsWithUserName",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ProductId: productId }),
        }
      );

      if(ReviewReponse.ok){
          return await ReviewReponse.json()
      }else{
        throw new Error('Could not find product reviews')
      }
}
