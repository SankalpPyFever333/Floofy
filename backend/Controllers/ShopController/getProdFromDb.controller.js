const shop = require("../../Modals/Shop.model");
const multer = require("multer");
const upload = multer({ dest: "" });


// Do the image upload part later.
const getProdFromDb = async (req, res) => {
      try {
      const All_prod_response = await shop.find({});
      
      res.status(200).json({message:'Product found', All_prod_response})    
      
      } catch (error) {
          res.status(400).json({message:"no product in database"})  
      }

}

module.exports = getProdFromDb;  



