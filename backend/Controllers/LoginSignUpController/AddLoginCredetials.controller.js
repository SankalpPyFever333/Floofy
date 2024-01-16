// const express = require("express");
const userSchema = require("../../Modals/LoginCredentials")

const AddUserLoginCred = async (req, res)=>{
      const {username , password , userType} = req.body;
      try {
            const newUser = new userSchema({ username, password, userType });
            await newUser.save();
            res.status(200).json({message:"User saved"})
            
      } catch (error) {
            res.status(400).json({message:"error in saving login credentials"})
      }
}


module.exports = AddUserLoginCred;
