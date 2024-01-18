import React, { useEffect, useState } from 'react'
import "./Signup.css";
import AccountCircle from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import FilledInput from '@mui/material/FilledInput';
import IconButton from '@mui/material/IconButton';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import "./Signup.css"
import TextField from '@mui/material/TextField';

import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import WhatDefineYou from './WhatDefineYou';

function SignLogComp() {
      const [username , setUsername] = useState('');
      const[password , setPassword] = useState('');
      const[userType , setUserType] = useState('');
      const [showPassword, setShowPassword] = React.useState(false);
      const navigate = useNavigate();
      const handleClickShowPassword = () => setShowPassword((show) => !show);

      const handleMouseDownPassword = (event) => {
            event.preventDefault();
      };

      

      
      const addUserSignupDetails =  async (e)=>{
            e.preventDefault()
            console.log(userType)
            // For now I am getting a empty string as user type. After studying redux , do it again.
            try {
                  const response = await fetch("http://localhost:3000/api/addLoginCredentialsOfuser" , {
                        method:'POST',      
                        headers:{
                                    'Content-Type':'application/json'
                              },
                        body: JSON.stringify({ username: username, password: password, userType: userType })
                  })

                  if(response.ok){
                        Swal.fire({
                              position: "center",
                              icon: "success",
                              title: "Details saved successfully",
                              showConfirmButton: false,
                              timer: 1500
                        });
                        navigate("/MainApp")
                  }
                  else{
                        Swal.fire({
                              icon: "error",
                              title: "Oops...",
                              text: "Something went wrong!",
                              // footer: '<a href="#">Why do I have this issue?</a>'
                        });

                  }

                  const data = await response.json();
                  console.log(data)

            } catch (error) {
                  console.log(error)
            }
            
      }

      return (
                  <div>
                        <span>Let's setup your login credentials</span>
                        <div className="inputFields">
                              <Box sx={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}>
                                    {/* <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} /> */}
                                    <TextField style={{ margin: "20px" }} id="input-with-sx" name='username' label="Username" variant="standard" onChange={(username) => {
                                          setUsername(username.target.value)
                                    }} />
                                    <TextField style={{ margin: "20px" }} id="input-with-sx" name='password' type='password' label="Password" variant="standard" onChange={(password) => {
                                          setPassword(password.target.value)
                                    }} />
                                    <WhatDefineYou setUserType={setUserType} />
                                    <Button variant="contained" onClick={addUserSignupDetails} style={{ margin: "20px" }} >Signup</Button>
                              </Box>
                        </div>
                  </div>
      )
}

export default SignLogComp
