const mongoose = require("mongoose")

const InvoiceSchema = new mongoose.Schema({
  OrderDetails: {
    type: mongoose.Types.ObjectId,
    ref: "TotalBillGeneration",
  },
});

const InvoiceModal = mongoose.model("InvoiceCollection" , InvoiceSchema);

module.exports = InvoiceModal;
