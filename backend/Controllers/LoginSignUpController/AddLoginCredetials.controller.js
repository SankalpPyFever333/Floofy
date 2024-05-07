// const express = require("express");
const userSchema = require("../../Modals/LoginCredentials.modal")
const bcrypt = require("bcrypt")
const saltRounds = 10;

const AddUserLoginCred = async (req, res)=>{
      let {username , password , contactNumber,  userType} = req.body;
      try {

            const existingUsername = await userSchema.findOne({
              username: username,
            });
            if (existingUsername) {
              return res.status(400).json({ error: "Username already exists" , errorcode:"Username" });
            }

            // Hash the plain-text password
            const hashedPassword = await bcrypt.hash(password, saltRounds);

            // Check if the password already exists
            const existingPassword = await userSchema.findOne({
              password: hashedPassword,
            });
            if (existingPassword) {
              return res
                .status(400)
                .json({
                  error: "Password already exists",
                  errorcode: "Password",
                });
            }

            // Check if the contact number already exists
            const existingContactNumber = await userSchema.findOne({
              contactNumber: contactNumber,
            });
            if (existingContactNumber) {
              return res
                .status(400)
                .json({
                  error: "Contact number already exists",
                  errorcode: "ContactNumber",
                });
            }

            bcrypt.hash(password , saltRounds, (err, hash)=>{
                  if(err){
                        console.error(err)
                  }
                  else{
                        console.log(`hashed pswrd is ${hash}`)
                        password = hash
                        const newUser = new userSchema({ username, password, contactNumber,  userType });
                        newUser.save();
                        res.status(200).json({message:"User saved"})
                        
                  }
            })
            
      } catch (error) {
            res.status(400).json({message:"error in saving login credentials"})
      }
}


module.exports = AddUserLoginCred;
