
const shop = require("../../../Modals/Shop.model");

const updateProductInDbByAdmin = async(req, res)=>{
      const productId = req.params.productId;
      console.log(productId)
      try {
            const updateProductResponse = await shop.findByIdAndUpdate(productId , req.body , {
                  new:true
            })
            if(!updateProductResponse){
                  return res.status(400).json({message:"Product Not found"})
            }
            return res.status(200).json({message:"Product updated successfully" , updatedProduct: updateProductResponse})
      } catch (error) {
            console.log(error)
            res.status(500).json({message:"Internal server error"})

      }
}

module.exports = updateProductInDbByAdmin;


