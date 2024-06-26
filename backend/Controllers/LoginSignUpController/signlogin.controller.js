const Doctor = require("../../Modals/Doctor.modal");
// const express = require("express");
const Rescuer = require("../../Modals/RescuerModal/Rescuer.modal");

const AddDoctor = async (req, res) => {
  const {
    Name,
    Username,
    Phone,
    Email,
    Experience,
    Education,
    Specialization,
    SocialMediaLink,
  } = req.body;
  try {
    const doctor = new Doctor({
      Name,
      Username,
      Phone,
      Email,
      Experience,
      Education,
      Specialization,
      SocialMediaLink,
    });
    await doctor.save();
    res.status(200).json({ message: "Doctor details saved" });
  } catch (error) {
    res.status(400).json({ message: "error in saving doctor details" });
  }
};

// Rescuer Signup:
const AddRescuer = async (req, res) => {
  const {
    
  } = req.body;
  try {
    const newResuerPerson = new Rescuer({
      
    });
    await newResuerPerson.save();
    res.status(200).json({ message: "Rescuer data saved successfully" });
  } catch (err) {
    res.status(400).json({ message: "Error in saving details" });
  }
};

module.exports = {AddDoctor , AddRescuer}




