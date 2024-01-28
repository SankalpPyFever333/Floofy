const shop = require("../../../Modals/Shop.model");

const deleteProductByAdmin = async (req, res)=>{
      const deleteProductIDs  = req.body;  
      console.log(deleteProductIDs)
      try {
            const deleteProducts = await shop.deleteMany({_id: {$in:deleteProductIDs }})
            if(deleteProducts.deletedCount === 0){
                  res.status(404).json({message:"Product NOt found"})
            }
            res.status(200).json({message:"Product deleted successfully" , deleteProducts})
      } catch (error) {
            console.log(error)
            res.status(500).json({message:"Internal server error"})
      }
}

module.exports = deleteProductByAdmin;
