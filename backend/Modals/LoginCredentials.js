const mongoose = require("mongoose")

const loginCredentalsSchema = mongoose.Schema({
      username: { type: String, required: true , unique:true },
      password: {type:String, require:true , unique:true}
})

const userLoginModel = mongoose.model("UserLoginCredentials" , loginCredentalsSchema)
module.exports = userLoginModel;



