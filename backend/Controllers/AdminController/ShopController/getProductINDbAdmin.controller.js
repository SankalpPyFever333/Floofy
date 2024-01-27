const shop = require("../../../Modals/Shop.model")

const updateProductInDb = async (req, res)=>{
      const ProductId = req.params.productId;
      console.log("Product Id in the server: ",ProductId)
      try {
            const product = await shop.findById(ProductId);
            res.status(200).json({message:"Product Found" , product: product})
      } catch (error) {
            res.status(500).json({message:"Internal server error"})
      }
}

module.exports = updateProductInDb;

