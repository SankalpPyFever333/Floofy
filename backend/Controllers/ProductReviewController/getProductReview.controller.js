const productReviwModal = require("../../Modals/productReview/ProductReview.modal");

const getProductReview = async (req, res)=>{
      try {
            const responseReview = await productReviwModal
              .find({})
              .populate("User Product");

              const usernameAndProdName = responseReview.map(
                (reviewWithUser) => {
                  return {
                    UserName: reviewWithUser.User.username,
                    ProductName: reviewWithUser.Product.ProductName,
                    Comment: reviewWithUser.Comment,
                    createdAt: reviewWithUser.createdAt.toLocaleDateString(),
                    _id: reviewWithUser._id,
                    Rating: reviewWithUser.Rating,
                  };
                }
              );

              if (usernameAndProdName) {
                return res.status(200).json({
                  message: "Get review with product",
                  review: usernameAndProdName,
                });
              } else {
                return res
                  .status(200)
                  .json({ message: "review not found", review: [] });
              }


      } catch (error) {
            res.status(500).json({message:"Internal server error"})
      }
}

module.exports = getProductReview;
