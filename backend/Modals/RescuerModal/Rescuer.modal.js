const mongoose = require("mongoose");

const rescuerSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    // specialization: {
    //   type: String,
    //   required: true,
    // },
    // equipments: {
    //   type: [String], // Array of equipment names
    //   default: [],
    // },
  },
  // remove the equipments and specilization
  {
    timestamps: true,
  }
);

// availability of shelter and foster, it is paid and paid by user.

const Rescuer = mongoose.model("Rescuer", rescuerSchema);

module.exports = Rescuer;


// I have to remove the rescuer module and just create it as a  normal user and give him a badge.

