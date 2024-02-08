const productReviwModal = require("../../Modals/productReview/ProductReview.modal");

const getProductreviewWithUsername = async (req, res) => {
  try {
    const reviewsByUser = await productReviwModal
      .find()
      .populate("User Product")
      .exec();

      console.log(reviewsByUser)
    reviewsByUser.map((reviewWithUser) => {
      return {
        UserName: reviewWithUser.User.username,
        ProductName: reviewWithUser.Product.ProductName,
      };
    });

    
    if (reviewsByUser) {
      return res
        .status(200)
        .json({ message: "Get review with product", review: reviewsByUser });
    } else {
      return res.status(200).json({ message: "review not found" , review: []});
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = getProductreviewWithUsername;
