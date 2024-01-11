const mongoose = require("mongoose")

// used when a normal user clicks on the edit profile.
const normalUser = new mongoose.Schema("NormalUser", {
  Username: String,
  Name: String,
  Bio: String,
});

const cmnUser = mongoose.model("Normal_User" , normalUser)
module.exports=cmnUser;
