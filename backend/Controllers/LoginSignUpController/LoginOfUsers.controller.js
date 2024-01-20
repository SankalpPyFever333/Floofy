// fetch the data from the database and check whether it matches with enterd data or not.
const generateToken = require("../../LoginToken/generateToken");
const  userLoginModel = require("../../Modals/LoginCredentials.modal")
const bcrypt = require('bcrypt')

const fetchloginData = async (req, res)=>{
      const {username , password} = req.body;
      
      try {
            const loginData = await userLoginModel.findOne({username})
            console.log(loginData.password)
            // first decrypt the password and then compare.

            bcrypt.compare(password , loginData.password , (err, result)=>{
                  if(err){
                        return res.status(401).json({message:`error occured ${err}`})
                  }
                  else if(result){
                        const token = generateToken(loginData)
                        res.status(200).json({message:"Login Successfull" , username:loginData.username , Token:token})
                  }
                  else{
                        return res.status(401).json({message:"passowrd is incorrect"})
                  }
            })

            // if(loginData.password !== password){
            //       return res.status(401).json('Invalid Password')
            // }  

            console.log(loginData.username);
            
            if(loginData.username !== username){
                  return res.status(401).json('Invalid Username')
            }
            
      } catch (error) {
            console.log(error)
            res.status(400).json({message:`Error in fetching data ${error}`})
      }
}

module.exports =  fetchloginData;


