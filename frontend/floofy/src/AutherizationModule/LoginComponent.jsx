import React, { useState, useSyncExternalStore } from 'react'
import videoSource from "../Assets/Login.mp4"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import WhatDefineYou from './WhatDefineYou';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SignupComponent from './SignupComponent';
function LoginComponent() {
      const [showSignUpForm, setShowSignup] = useState(true);
      const [userType, setUserType] = useState('');
      const [UserName, setUserName] = useState('');
      const [password , setPassword] =  useState('');
      const navigate = useNavigate();

      const handleSpanClick = ()=>{
            setShowSignup(!showSignUpForm)
      }

      let userFound = false;
      const handleLoginClick = async ()=>{
            // using fetch hit the api and get data from database and match it with values enterd by the user.
            const loginResponse = await fetch("http://localhost:3000/api/getLoginData" , {
                  method:"GET",
                  headers:{
                        'Content-Type':'application/json',
                  }
            })
            if(loginResponse.ok){
                  // write code for matching the details enterd by user in the form.
                  const loginDataFromDb = await loginResponse.json();
                  console.log(loginDataFromDb[0].userType,"login data")

                  // console.log(`entered username is ${UserName} and password is ${password}`)
                  loginDataFromDb.forEach(element => {
                        console.log(element.username)
                        if((element.username===UserName && element.password === password )){
                              userFound = true
                        }
                        
                  });

                  if(userFound){
                        Swal.fire({
                              position: "center",
                              icon: "success",
                              title: "Logged in successfully",
                              showConfirmButton: false,
                              timer: 1500
                        });
                        navigate("/MainApp")
                  } else {
                        Swal.fire({
                              icon: "error",
                              title: "Oops...",
                              text: "Entered the wrong details",
                        });

                  }
            }
            else{
                  Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                        
                  });
            }
      }

      return (
            <div>
                  {
                  showSignUpForm ? (

                  <div className="container-fluid">
                        <div className="row">
                              <div className="col-sm-5">
                                    <video autoPlay loop muted className="responsive-video">
                                          <source src={videoSource} type="video/mp4" />
                                    </video>
                              </div>
                              <div className="col-sm-6">
                                    <div style={{ margin: "20px" }} className="stepComplete">
                                          <h4>Welcome to floofy</h4>
                                    </div>
                              
                        
                                    <div className="logincinfo">
                                          <Box
                                                component="form"
                                                sx={{
                                                      '& > :not(style)': { m: 1, width: '25ch' },
                                                }}
                                                noValidate
                                                autoComplete="off"
                                          >
                                                <TextField id="standard-basic" label="Username" variant="standard" onChange={(username)=>{
                                                      setUserName(username.target.value)
                                                }} />
                                                <TextField id="standard-basic" label="password" variant="standard" onChange={(password)=>{
                                                      setPassword(password.target.value)
                                                }} />
                                                <WhatDefineYou setUserType={setUserType} showAdminRadio = {true} />
                                                <Button onClick={handleLoginClick} variant="contained">Login</Button>
                                                <br />
                              <span onClick={handleSpanClick} > <i>Don't have an account?</i>  </span>
                                          </Box>
                                    </div>
                              </div>
                        </div>
                  </div>
                  ) : (
                  <SignupComponent/>
                  )
                  }
            </div>
      )
}

export default LoginComponent




