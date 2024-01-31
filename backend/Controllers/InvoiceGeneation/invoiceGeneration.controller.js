const InvoiceModal = require("../../Modals/InvoiceModal/Invoice.modal");

const generateInvoice = async(req, res)=>{
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
            const generatedInvoice = new InvoiceModal({
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
            });
            await generatedInvoice.save();
            res.status(200).json({message:"Invoice generated successfully" , InvoiceResponse: generatedInvoice});
      } catch (error) {
            console.log(error)
            res.status(500).json({message:"Internal server error"})
      }
}

module.exports = generateInvoice;
