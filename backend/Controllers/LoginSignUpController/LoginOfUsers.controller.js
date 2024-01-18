// fetch the data from the database and check whether it matches with enterd data or not.
const  userLoginModel = require("../../Modals/LoginCredentials")

const fetchloginData = async (req, res)=>{
      try {
            const loginData = await userLoginModel.find();
            res.status(200).json(loginData)
      } catch (error) {
            res.status(400).json({message:"Error in fetching data"})
      }
}

module.exports =  fetchloginData;


