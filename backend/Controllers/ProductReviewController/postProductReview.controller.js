const productReviwModal = require("../../Modals/productReview/ProductReview.modal");

const postProductReview = async (req, res)=>{
      const { User, Product, Comment, Rating } = req.body;
      try {
            const newProductReview = new productReviwModal({
              User,
              Product,
              Comment,
              Rating,
            });

            await newProductReview.save();
            res.status(200).json({message:"Review posted successfully"})

      } catch (error) {
            res.status(500).json({message:"Internal server error"})
      }
}

module.exports = postProductReview;
