const shop = require("../../../Modals/Shop.model");

const deleteProductByAdmin = async (req, res)=>{
  const deleteProductIDs = req.body;
  // here it may cause error:  BSONError: input must be a 24 character hex string, 12 byte Uint8Array, or an integer at new ObjectId reason
  console.log(deleteProductIDs);
  try {
    const deleteProducts = await shop.deleteMany({
      _id: { $in: deleteProductIDs },
    });
    if (deleteProducts.deletedCount === 0) {
      res.status(404).json({ message: "Product NOt found" });
    }
    res
      .status(200)
      .json({ message: "Product deleted successfully", deleteProducts });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = deleteProductByAdmin;
