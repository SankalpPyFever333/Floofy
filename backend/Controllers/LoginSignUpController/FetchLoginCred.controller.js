
const userLoginModel = require("../../Modals/LoginCredentials.modal");

const fetchLoginCred = async (req, res)=>{
      const {contactNumber} = req.body;
      try {
            const userLoginData = await userLoginModel.findOne({contactNumber})
            console.log(userLoginData)

            if(userLoginData){
                  return res.status(200).json({message:"valid user" , userLoginData})
            }
            else{
                  return res.status(400).json({message:"user not found" , userLoginData})
            }
            

      } catch (error) {
            console.log(error)
            return res.status(500).json({message:"Internal server error"})
      }
}

module.exports = fetchLoginCred;


