const  ProductOrder = require("../../Modals/ProductOrder/ProductOrder.modal");

const cancelOrder = async(req, res)=>{
      const {OrderRowId} = req.body;
      try {
            const deletedOrder = await ProductOrder.findByIdAndDelete({_id : OrderRowId});
            if(deletedOrder){
                  res.status(200).json({message: "Successfully Cancelled The Order"})
            }else{
                  res.status(401).json({message:"Error in deleting order"})
            }
      } catch (error) {
            console.log("Server Error occurred!!" , error)
            res.status(500).json({
                message: "Internal Server Error"
            })
      }
}
module.exports = cancelOrder;