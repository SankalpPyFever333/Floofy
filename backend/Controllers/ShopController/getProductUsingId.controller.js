const Shop = require("../../Modals/Shop.model");

const getSingleProductFromDb = async(req, res)=>{
      const {productId} = req.body;
      console.log("productID is: " , productId);
      try {
            const response = await  Shop.findById({_id:productId});
            if(!response) return res
              .status(404)
              .json({ message: "No product found", ProdResponse: [] });
            res.status(200).json({message:"Product found" , ProdResponse:response});
      } catch (error) {
            console.log(error);
            res.status(500).json({message:"Server Error"})
      }
}

module.exports = getSingleProductFromDb;