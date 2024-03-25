const ProductOrder = require("../../Modals/ProductOrder/ProductOrder.modal");

const updateOrderStatus = async(req, res)=>{
      const {orderRowId , status} = req.body;
      try {
            const orderStatus = await ProductOrder.findByIdAndUpdate(
              orderRowId,
              { status: status },
              {
                new: true,
              }
            );
            if(!orderStatus){
                  return res.status(401).json({message:"Error in updating"})
            }
            return res.status(200).json({message:"Updated status successfullly."})
      } catch (error) {
            console.log("Server error !!" , error);
            res.status(500).json({message:"Server error!!"})
      }
}

module.exports = updateOrderStatus;
