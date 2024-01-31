const ProductOrder = require("../../Modals/ProductOrder/ProductOrder.modal");

const placeOrderByUser = async(req, res) => {
      // Write code for creating order.
      const {User , Products , totalAmount ,deliveryAddress , status} = req.body;
      try {
            const newProductReview = new ProductOrder({User , Products, totalAmount , deliveryAddress , status});
            await newProductReview.save();
            res.status(200).json({message:"order placed successfully!!" , newProductReview: newProductReview})
      } catch (error) {
            console.log('Error in placing the Order : ', error);
            res.status(500).json({message:"Internal server error"})
      }
}

module.exports = placeOrderByUser;
