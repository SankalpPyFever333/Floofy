const mongoose = require('mongoose')

const ShopModel = new mongoose.Schema({
  ProductName: String,
  Price: String,
  Category: String,
  Description: String,
  ImagePath: String,
  Quantity: Number,
  DiscountTag: Boolean,
});

const shop = mongoose.model( "Shop" , ShopModel)
module.exports = shop;
