const mongoose = require("mongoose")

const loginCredentalsSchema = mongoose.Schema({
      username: { type: String, required: true , unique:true },
      password: {type:String, require:true , unique:true},
      contactNumber: {type:String, require:true , unique:true},
      userType: {type:String}
})

const userLoginModel = mongoose.model("UserLoginCredentials" , loginCredentalsSchema)
module.exports = userLoginModel;



