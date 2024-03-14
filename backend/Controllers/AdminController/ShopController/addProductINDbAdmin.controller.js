const Shop = require("../../../Modals/Shop.model");

const addProductInDbAdmin = async (req, res) => {
  const {
    ProductName,
    Price,
    Category,
    Description,
    Quantity,
    DiscountTag,
    SuitableFor,
    ExpiryDate,
    KeyIngredients,
    Allergens,
  } = req.body;
  const file = req.file;
  console.log(file);

  if (!file) return res.status(400).json({ message: "No file uploaded" });

  try {
    const newProduct = new Shop({
      ProductName: ProductName,
      Price: Price,
      Category: Category,
      Description: Description,
      ImagePath: `http://localhost:3000/uploads/${file.originalname}`, // Store the path where the file is saved
      Quantity: Quantity,
      DiscountTag: DiscountTag,
      SuitableFor:SuitableFor,
      Allergens:Allergens,
      KeyIngredients:KeyIngredients,
      ExpiryDate: ExpiryDate
    });

    const savedProduct = await newProduct.save();

    if (savedProduct) {
      res.status(200).json({ message: "Product saved" });
    } else {
      res.status(400).json({ message: "Error in adding product" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = addProductInDbAdmin;
