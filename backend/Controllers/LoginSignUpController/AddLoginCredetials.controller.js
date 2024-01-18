// const express = require("express");
const userSchema = require("../../Modals/LoginCredentials.modal")
const bcrypt = require("bcrypt")
const saltRounds = 10;

const AddUserLoginCred = async (req, res)=>{
      let {username , password , userType} = req.body;
      try {
            bcrypt.hash(password , saltRounds, (err, hash)=>{
                  if(err){
                        console.error(err)
                  }
                  else{
                        console.log(`hashed pswrd is ${hash}`)
                        password = hash
                        const newUser = new userSchema({ username, password, userType });
                        newUser.save();
                        res.status(200).json({message:"User saved"})
                        
                  }
            })
            
      } catch (error) {
            res.status(400).json({message:"error in saving login credentials"})
      }
}


module.exports = AddUserLoginCred;
