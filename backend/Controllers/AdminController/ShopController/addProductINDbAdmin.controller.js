
const shop = require("../../../Modals/Shop.model");

const addProductInDbAdmin = async (req, res)=>{
      const { ProductName, Price, Category, Description, ImagePath, Quantity, DiscountTag} = req.body;
      try {
            const newProduct = new shop({
              ProductName: ProductName,
              Price: Price,
              Category: Category,
              Description: Description,
              ImagePath: ImagePath,
              Quantity: Quantity,
              DiscountTag: DiscountTag,
            });
            const savedProduct = await newProduct.save();
            if(savedProduct){
                  res.status(200).json({message:"Product saved"})
            }
            else{
                  res.status(400).json({messgae:"Error in adding product"})
            }
      } catch (error) {
            console.log(error)
            res.status(500).json({message:"Internal server error"})
      }
}

module.exports = addProductInDbAdmin;
