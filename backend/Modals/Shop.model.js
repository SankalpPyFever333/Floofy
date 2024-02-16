const mongoose = require('mongoose')

const ShopModel = new mongoose.Schema({
  ProductName: String,
  Price: String,
  Category: String,
  Description: String,
  ImagePath: String,
  Quantity: String,
  DiscountTag: String,
});

// here we have to take the refernce for the product review and when we delete the product we get that complete product in the response and then fetch the rviewId hit the delete api endpoint to delete that review of products.


const shop = mongoose.model( "Shop" , ShopModel)
module.exports = shop;
