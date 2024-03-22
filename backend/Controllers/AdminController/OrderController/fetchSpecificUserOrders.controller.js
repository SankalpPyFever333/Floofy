const ProductOrder = require("../../../Modals/ProductOrder/ProductOrder.modal");

const fetchMyProductOrderDetails = async (req, res) => {
      const {userId} = req.body;
  try {
    const productOrderResponse = await ProductOrder.find({ User: userId })
      .populate("User Products.product")
      .exec();
    productOrderResponse.map((productOrder) => {
      return {
        UserName: productOrder.User.username,
        ProductName: productOrder.Products.ProductName,
        Quantity: productOrder.Products.quantity,
        TotalAmount: productOrder.totalAmount,
        createdAt: productOrder.createdAt.toLocaleDateString(),
        DeliverAddress: productOrder.deliveryAddress,
        Status: productOrder.Status,
      };
    });

    if (!productOrderResponse) {
      res.status(404).json({ message: "Orders not found" });
    } else {
      console.log(productOrderResponse);
      res
        .status(200)
        .json({ message: "Order found", fetchedOrder: productOrderResponse });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = fetchMyProductOrderDetails;
