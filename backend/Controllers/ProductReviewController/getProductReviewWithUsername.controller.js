const productReviwModal = require("../../Modals/productReview/ProductReview.modal");

const getProductreviewWithUsername = async (req, res) => {
  const {ProductId} = req.body;
  try {
    const reviewsByUser = await productReviwModal
      .find({
        Product:ProductId
      })
      .populate("User Product")
      .exec();

      console.log(reviewsByUser)
    const usernameAndProdName = reviewsByUser.map((reviewWithUser) => {
      return {
        UserName: reviewWithUser.User.username,
        ProductName: reviewWithUser.Product.ProductName,
        Comment: reviewWithUser.Comment,
        Rating: reviewWithUser.Rating,
        createdAt: reviewWithUser.createdAt.toLocaleDateString(),
        _id: reviewWithUser._id,
        Rating: reviewWithUser.Rating
      };
    });

    
    if (usernameAndProdName) {
      return res
        .status(200)
        .json({
          message: "Get review with product",
          review: usernameAndProdName,
          
        });
    } else {
      return res.status(400).json({ message: "review not found", review: [] });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = getProductreviewWithUsername;
