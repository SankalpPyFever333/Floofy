const mongoose = require("mongoose")

const RescuePerson = new mongoose.Schema("RescuePerson", {
  Name: String,
  Username: String,
  Phone: String,
  Email: String,
  Experience: Number,
  Education: String,
  Specialization: String,
  SocialMediaLink: String,
  Transporting: String,
  Equipments: String,
});

const rescuer = mongoose.model("Rescuer" , RescuePerson)
module.exports = rescuer;
