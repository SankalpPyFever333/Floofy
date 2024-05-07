import React, { useState } from 'react'
import videoSource from "../Assets/Login.mp4"
import floofyLogo from "../Assets/FloofyLogo.png"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
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
                  method:"POST",
                  headers:{
                        'Content-Type':'application/json',
                  }, 
                  body: JSON.stringify({ username: UserName, password: password, userType: localStorage.getItem("userType")})
            })
            
            if(loginResponse.ok){
                  // write code for matching the details enterd by user in the form.
                  const loginDataFromDb = await loginResponse.json();
                  console.log(loginDataFromDb)

                  // console.log(`entered username is ${UserName} and password is ${password}`)

                        // console.log(loginDataFromDb.Response.username)
                        // console.log(loginDataFromDb.Response.password)
                        
                  if ((loginDataFromDb.username === UserName)){
                              userFound = true
                        setUserType(loginDataFromDb.userType)
                        localStorage.setItem("Username" , loginDataFromDb.username )
                  }
                  else{
                        Swal.fire({
                              icon: "error",
                              title: "Oops...",
                              text: "username not matched",
                              showConfirmButton: false,
                              timer: 1500
                        });
                  }
                        
                  if(userFound){
                        console.log("user id is ", loginDataFromDb.userId)
                        localStorage.setItem("userId" , loginDataFromDb.userId)
                        Swal.fire({
                              position: "center",
                              icon: "success",
                              title: "Logged in successfully",
                              showConfirmButton: false,
                              timer: 1500
                        });
                        if(userType === "Admin"){
                              navigate("/MainAdminComponent")
                              console.log("Admin id is: ", loginDataFromDb.userId)
                        }
                        else{
                              navigate("/MainApp")
                        }

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


      const handleForgotPsswrdClick = ()=>{
            // navigate to the component of forgot password.
            navigate("/GotoVerifyOtp")
      }


      return (
            <div>
                  {
                        showSignUpForm ? (

                              <div className="container-fluid">
                                    <div className="row">
                                          <div className="col-sm-5">
                                                <img src={floofyLogo} alt="" style={{
                                                      height: "40rem", position: "relative",
                                                      left: "-157px"
                                                }} />
                                          </div>
                                          <div className="col-sm-6" style={{ position: "relative", top: "50px" }}>

                                                <div className="logincinfo text-center shadow-lg" style={{ backgroundColor: "#C1FCD3", padding: "20px" }}>
                                                      <Box
                                                            component="form"
                                                            sx={{
                                                                  '& > :not(style)': { m: 1, width: '25ch' },
                                                            }}
                                                            noValidate
                                                            autoComplete="off"
                                                      >
                                                            <TextField id="standard-basic" label="Username" variant="standard" onChange={(username) => {
                                                                  setUserName(username.target.value)
                                                            }} />
                                                            <TextField id="standard-basic" label="Password" type='password' variant="standard" onChange={(password) => {
                                                                  setPassword(password.target.value)
                                                            }} />

                                                            <Link
                                                                  component="button"
                                                                  variant="body2"
                                                                  onClick={handleForgotPsswrdClick}

                                                            >
                                                                  Forgot password?
                                                            </Link>
                                                            <div className="text-center postion-relative" style={{ marginLeft: "4.3rem" }} >
                                                                  <WhatDefineYou setUserType={setUserType} showAdminRadio={true} />

                                                            </div>
                                                            <Button onClick={handleLoginClick} variant="contained" style={{ marginTop: "10px", backgroundColor: "#4CAF50", color: "white", borderRadius: "10px" }}>Login</Button>
                                                            <br />

                                                            <br />
                                                            <span onClick={handleSpanClick}><i style={{ color: "purple" }}>Don't have an account? Sign up</i></span>
                                                      </Box>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        ) : (
                              <SignupComponent />
                        )
                  }
            </div>

      )
}

export default LoginComponent




