import React, { useState } from 'react'
import frgtImage from "../Assets/ForgotpsswrdImage.webp"
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import authentication from './firebase';
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import VerifyOtpComp from './VerifyOtpComp';

function ForgotPassword() {

      const [newPassword , setNewPassword] = useState('');
      const [newConfirmPassword , setNewConfirmPassword] = useState('');
      const [phNumber, setPhNumber] = useState('');
      const navigate = useNavigate();
      const updateNewPasswordInDb = ()=>{
            if(newPassword === newConfirmPassword){
                  // In this , you need to encrypt the password adn then save it to databse.
                  // From here , send the phone, and new password in the request body.

                  // Also first verify the phone number by sending otp.

                  Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Password updated successfully",
                        showConfirmButton: false,
                        timer: 1500
                  });
                  navigate("/LoginPage")
            }
            else{
                  Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Confirm Password not matched!",
                  });
            }
      }

      const generateRecaptchaVerifier = () => {
            // creating a global instance of RecaptchaVerifier class.
            window.recaptchaVerifier = new RecaptchaVerifier(
                  authentication,
                  "recaptchaContainer",
                  {
                        "size": "visible",

                  }
            );
      }


      const handleSendotp = async () => {
            // console.log("handling the sendOtpClick")
            if (phNumber.length === 13) {
                  generateRecaptchaVerifier();
                  let appVeifier = window.recaptchaVerifier;
                  signInWithPhoneNumber(authentication, phNumber, appVeifier)
                        .then((confirmationResult) => {
                              window.confirmationResult = confirmationResult;
                              console.log("recaptcha verified!! and navigating to verifyOTP" , confirmationResult);
                        })
                        .catch((error) => {
                              console.log(error);
                        })
            }
      }

      return (
            <div>
                  <div className="container-fluid">
                        <div className="row">
                              <div className="col-sm-6">
                                    <img className="responsive-video" style={{
                                          width:"80%"
                                    }} src={frgtImage} alt="Forgot Password" />
                              </div>
                              <div className="col-sm-6">
                                    <div style={{ margin: "20px" }} className="stepComplete">
                                          <h4>Don't forget floofy</h4>
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
                                                <TextField id="standard-basic" label="Enter password" variant="standard" onChange={(newPsswrd) => {
                                                      setNewPassword(newPsswrd.target.value)
                                                }} />
                                                <TextField id="standard-basic" label="confirm password" variant="standard" type="password" onChange={(cnfrmNewPsswrd) => {
                                                      setNewConfirmPassword(cnfrmNewPsswrd.target.value)
                                                }} />
                                          </Box>
                                          <Button onClick={updateNewPasswordInDb} variant="contained">Update</Button>
                                          
                                    </div>

                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default ForgotPassword



