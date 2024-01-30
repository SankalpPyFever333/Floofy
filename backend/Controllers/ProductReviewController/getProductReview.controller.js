const productReviwModal = require("../../Modals/productReview/ProductReview.modal");

const getProductReview = async (req, res)=>{
      try {
            const responseReview = await productReviwModal.find();
            if(responseReview){
                  res.status(200).json({message:"Review fetched!" , ReviewResponse: responseReview})
            }
            else{
                  res.status(401).json({Message : "No Reviews Found"})
            }
      } catch (error) {
            res.status(500).json({message:"Internal server error"})
      }
}

module.exports = getProductReview;
