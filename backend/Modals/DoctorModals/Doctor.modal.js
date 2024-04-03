const { default: mongoose } = require("mongoose");

const DoctorSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Username: {
    type: mongoose.Schema.Types.ObjectId, // Reference to the UserLoginCredentials model
    ref: "UserLoginCredentials",
    required: true,
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
  Experience: {
    institutionName: String,
    startDate: String,
    endDate: String,
    description: String,
  },
  // Education: {
  //   degree: String,
  //   institution: String,
  //   completionYear: String,
  //   fieldOfStudy: String,
  // },
  Specialization: {
    areaOfSpecialization: String,
    additionalTraining: String,
  },

  LocationOfDoctor: {
    type: String,
    required: true,
  },

  LicenseNumber: {
    type: String,
    unique: true,
    required: true,
  },
});


const DoctorModel = mongoose.model("DoctorModel" , DoctorSchema)

module.exports = DoctorModel;
