// do token generation later.
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv");


dotenv.config();

const secretKey = process.env.KEY;

const generateToken = (payload)=>{
      return jwt.sign({payload} , secretKey , {expiresIn:"24h"})
}

module.exports = generateToken;
