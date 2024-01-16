const mongoose = require('mongoose')

const DoctorSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Username: {
    type: String,
    required:true,
    unique: true
  },
  Phone: {
    type: String,
    required: true,
    unique: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  Experience: String,
  Education: String,
  Specialization: String,
  SocialMediaLink: String,
});

const Doctor = mongoose.model("Doctor" , DoctorSchema)
module.exports= Doctor;
