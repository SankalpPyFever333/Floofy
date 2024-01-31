const ProductOrder = require("../../../Modals/ProductOrder/ProductOrder.modal");

const fetchProductOrderDetails = async (req, res)=>{
      // in this I may have to make a cart modal where I store the all the details for a user and from there I can fetch the quantity and other details. And for now I am using Shop collection just for retrieving the product name to display in the table.

      try {
            const productOrderResponse = await ProductOrder.find({}).populate(
              "User Products"
            ).exec();
            productOrderResponse.map((productOrder)=>{
                  return {
                    UserName: productOrder.User.username,
                    ProductName: productOrder.Products.ProductName,
                    Quantity: productOrder.Products.quantity,
                    TotalAmount: productOrder.totalAmount,
                    OrderDate: productOrder.createdAt,
                    DeliverAddress: productOrder.deliveryAddress,
                    Status : productOrder.Status,
                    
                  };  
            })
      
            if(!productOrderResponse){
                  res.status(404).json({message:"Orders not found"})
            }
            else{
                  console.log(productOrderResponse);
                  res.status(200).json({message:"Order found" , fetchedOrder: productOrderResponse}); 
            }
      } catch (error) {
            console.log(error)
            res.status(500).json({message:"Internal server error"})
      }

}

module.exports = fetchProductOrderDetails;
