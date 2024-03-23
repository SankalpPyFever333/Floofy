const ProductOrder = require("../../Modals/ProductOrder/ProductOrder.modal");

const fetchProductOrderToShowEdit = async(req, res)=>{
      const {OrderId} = req.body;
      try {
            const OrderDetails = await  ProductOrder.findById(OrderId);
            if(!OrderDetails) return res.status(401).json({message:'No Data Found'});
            return res
              .status(200)
              .json({ message: "Order Found", OrderDetails: OrderDetails });
      } catch (error) {
            console.log("error is: " , error)
            res.status(500).json({message:"Server Error!!"})
      }
}
module.exports = fetchProductOrderToShowEdit;
