import React, { useEffect, useState } from 'react'
import "./Signup.css";

import Box from '@mui/material/Box';

import Button from '@mui/material/Button';

import "./Signup.css"
import TextField from '@mui/material/TextField';

import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import WhatDefineYou from './WhatDefineYou';

function SignLogComp() {
      const [username , setUsername] = useState('');
      const[password , setPassword] = useState('');
      const [phNumber, setPhNumber] = useState('');
      const[userType , setUserType] = useState(localStorage.getItem('userType'));
      const [showPassword, setShowPassword] = React.useState(false);
      const navigate = useNavigate();
      const handleClickShowPassword = () => setShowPassword((show) => !show);

      const handleMouseDownPassword = (event) => {
            event.preventDefault();
      };

      const isValidPhoneNumber = (phoneNumber) => {
            // Check if the input is a string
            if (typeof phoneNumber !== 'string') {
                  return false;
            }

            // Remove any non-digit characters from the phone number
            const strippedPhoneNumber = phoneNumber.replace(/\D/g, '');

            // Check if the stripped phone number has exactly 10 digits
            return strippedPhoneNumber.length === 10;
      };


      
      const addUserSignupDetails = async (e) => {
            e.preventDefault();

            if (!isValidPhoneNumber(phNumber)) {
                  Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Enter a valid 10-digit phone number.",
                  });
                  return; // Stop execution if phone number is invalid
            }

            try {
                  const response = await fetch("http://localhost:3000/api/addLoginCredentialsOfuser", {
                        method: 'POST',
                        headers: {
                              'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ username: username, password: password, contactNumber: phNumber, userType: userType })
                  });

                  // check duplication in backend

                  const data = await response.json();
                  console.log("data after duplicate insertion: ", data);

                  // Check if the response contains a MongoDB duplicate key error
                  if (!response.ok) {
                        if (data.errorcode === "Username") {
                              // Check if the error is due to a duplicate username, password, or phone number
                              Swal.fire({
                                    icon: "error",
                                    title: "User already exists",
                                    text: "Please choose a different username."
                              });
                              return; // Stop execution if there's a duplicate key error
                        }
                        else if (data.errorcode === "ContactNumber") {
                              Swal.fire({
                                    icon: "error",
                                    title: "Contact Number already exists",
                                    text: "Please choose a different contact number"
                              });
                              return;
                        }
                        else{
                              Swal.fire({
                                    icon: "error",
                                    title: "Password already exists",
                                    text: "Please choose a different password"
                              });
                              return;
                        }
                  }
                  // If no error occurred, navigate to the main app
                  Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Details saved successfully",
                        showConfirmButton: false,
                        timer: 1500
                  }).then(() => {
                        navigate("/");
                  });
            } catch (error) {
                  console.log(error);
            }
      }

      return (
            <div>
                  <span style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px', display: 'block', textAlign: 'center' }}>Let's set up your login credentials</span>
                  <div className="inputFields" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <TextField style={{ margin: '10px', width: '300px' }} id="input-with-sx" name='username' label="Username" variant="outlined" onChange={(username) => {
                              setUsername(username.target.value)
                        }} />
                        <TextField style={{ margin: '10px', width: '300px' }} id="input-with-sx" name='password' type='password' label="Password" variant="outlined" onChange={(password) => {
                              setPassword(password.target.value)
                        }} />
                        <TextField style={{ margin: '10px', width: '300px' }} id="input-with-sx" name='password' label="Phone Number" variant="outlined" onChange={(phNumber) => {
                              setPhNumber(phNumber.target.value)
                        }} />
                        <WhatDefineYou setUserType={setUserType} />
                        <Button variant="contained" onClick={addUserSignupDetails} style={{ margin: '20px', width: '200px', backgroundColor: '#1976D2', color: '#fff' }}>Signup</Button>
                  </div>
            </div>

      )
}

export default SignLogComp
