const productReviwModal = require("../../Modals/productReview/ProductReview.modal");
const deleteProductReview = async (req, res) =>{
      const reviewIds = req.body;
      console.log(reviewIds.reviewIds)
      try {
            const deleteReviewResponse = await  productReviwModal.deleteMany({
      _id: { $in: reviewIds.reviewIds },}); 
            if(deleteReviewResponse.deletedCount === 0){
                  return res.status(404).json({message:"Review not found"})
            }
            return res.status(200).json({message:"Review deleted successfully"})
      } catch (error) {
            console.log(error)
            res.status(500).json({message:"Internal server error"})
      }
}

module.exports = deleteProductReview;

