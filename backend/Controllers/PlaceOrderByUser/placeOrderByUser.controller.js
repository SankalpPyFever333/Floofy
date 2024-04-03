const ProductOrder = require("../../Modals/ProductOrder/ProductOrder.modal");

const placeOrderByUser = async(req, res) => {
      // Write code for creating order.
      const { User, Products, totalAmount, deliveryAddress, CustomerEmail , status } = req.body;
      console.log("DeliverAdress home: ", deliveryAddress.HomeAddress);
      try {
            const newProductOrder = new ProductOrder({
              User,
              Products,
              totalAmount,
              CustomerEmail, 
              deliveryAddress: {
                HomeAddress: deliveryAddress.HomeAddress,
                PIN: deliveryAddress.PIN,
                District: deliveryAddress.District,
              },
              status,
            });
            await newProductOrder.save();
            res.status(200).json({message:"order placed successfully!!" , newProductReview: newProductOrder})
      } catch (error) {
            console.log('Error in placing the Order : ', error);
            res.status(500).json({message:"Internal server error "})
      }
}

module.exports = placeOrderByUser;
