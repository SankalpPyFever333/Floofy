const mongoose = require("mongoose");

const ShopSchema = new mongoose.Schema(
  {
    ProductName: String,
    Price: String,
    Category: String,
    Description: String,
    ImagePath: String,
    Quantity: String,
    SuitableFor: String, // for whom this product is suitable (e.g., "adults", "children")
    DiscountTag: String,
    ExpiryDate: String,
    Allergens: [String],
    KeyIngredients: String
  },
  {
    timestamps: true,
  }
);

const Shop = mongoose.model("Shop", ShopSchema);

module.exports = Shop;
