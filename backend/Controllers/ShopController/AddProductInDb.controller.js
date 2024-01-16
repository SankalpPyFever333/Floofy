const shop =  require("../../Modals/Shop.model");


const AddProdinDb = async (req , res)=>{
      const {
        ProductName,
        Price,
        DiscountTag,
        Category,
        Description,
        ImagePath,
        Quantity,
      } = req.body;
      try {
            const AddProd = new shop({
              ProductName,
              Price,
              DiscountTag,
              Category,
              Description,
              ImagePath,
              Quantity,
            });
            await AddProd.save();
            res.status(200).json({message:"Product Added"})
      } catch (error) {
            res.status(400).json({message:"Error in Adding product"})
      }
      
      
}

module.exports = AddProdinDb;




