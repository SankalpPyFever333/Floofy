const mongoose = require("mongoose");

const ShopSchema = new mongoose.Schema(
  {
    ProductName: String,
    Price: String,
    Category: String,
    Description: String,
    ImagePath: String,
    Quantity: String,
    DiscountTag: String,
    // ExpiryDate: String,
  },
  {
    timestamps: true,
  }
);

const Shop = mongoose.model("Shop", ShopSchema);

module.exports = Shop;
