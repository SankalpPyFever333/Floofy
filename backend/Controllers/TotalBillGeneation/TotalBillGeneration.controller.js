const TotalBillModal = require("../../Modals/BillModal/TotalBillForCart.modal");

const generateBillForCart = async(req, res)=>{
      const {
        InvoiceNumber,
        OrderDate,
        DeliveryDate,
        Customer,
        Products,
        totalBillAmount,
        Taxation,
        PaymentMode,
        PaymentStatus,
        DiscountedAmount,
        OrderStatus
      } = req.body;
      try {
            const generatedBillForCartProduct = new TotalBillModal({
              InvoiceNumber,
              OrderDate,
              DeliveryDate,
              Customer,
              Products,
              totalBillAmount,
              Taxation,
              PaymentMode,
              PaymentStatus,
              DiscountedAmount,
              OrderStatus,
            });
            await generatedBillForCartProduct.save();
            res
              .status(200)
              .json({
                message: "Total bill generated successfully",
                InvoiceResponse: generatedBillForCartProduct,
              });
      } catch (error) {
            console.log(error)
            res.status(500).json({message:"Internal server error"})
      }
}

module.exports = generateBillForCart;
