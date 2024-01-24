
const userLoginModel = require("../../Modals/LoginCredentials.modal");

const updatePasswordController = async(req, res)=>{
      // const userId = req.param.id;
      const { contactNumber , password} = req.body;
      try {
            const userDoc = await userLoginModel.findByIdAndUpdate(contactNumber , {
                  password : password
            })
            if(userDoc){
                  res.status(200).json({message:"Password updated"})
            }
            else{
                  res.status(400).json({message:"error in updating password"})
            }
      } catch (error) {
            return res.status(500).json({message:"Internal server error"})
      }
}

module.exports = updatePasswordController;
