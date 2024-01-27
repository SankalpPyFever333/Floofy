
const userLoginModel = require("../../Modals/LoginCredentials.modal");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const updatePasswordController = async(req, res)=>{
      // const userId = req.param.id;
      const { contactNumber , password} = req.body;
      // let { password } = req.body;
      try {
            // hash your password:
            const hashedPassword = await bcrypt.hash(password, saltRounds)
            const userDoc = await userLoginModel.findOneAndUpdate({contactNumber} , {
                  $set :{ "password" : hashedPassword }},
                  {
                        new : true   // it return the updated document rather than original one
                  }
                  
            );
            if(userDoc){
                  res.status(200).json({message:"Password updated" , user:userDoc})
            }
            else{
                  res.status(400).json({message:"error in updating password"})
            }
      } catch (error) {
            console.log(error)
            return res.status(500).json({message:"Internal server error"})
      }
}

module.exports = updatePasswordController;
