import React, { useState, useRef } from 'react';
import './OtpVerification.css'; // Include a CSS file for styling
import TextField from '@mui/material/TextField';
import authentication from './firebase';
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import Button from '@mui/material/Button';
import verifyOtp from "../Assets/OtpVerify1.jpg"
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const VerifyOtpComp = () => {
      const [otp, setOtp] = useState(['', '', '', '', '', '']);
      const [phNumber, setPhNumber] = useState('');
      const [CResult , setCResult] = useState('');
      const inputRefs = useRef(new Array(6).fill(null).map(() => React.createRef()));
      const navigate = useNavigate();
      const enteredOtp = otp.map((num) => num.toString()).join("");
      const handleChange = (index, value) => {
            if (!isNaN(value) && value.length <= 1) {
                  const newOtp = [...otp];
                  newOtp[index] = value;
                  setOtp(newOtp);

                  // Move to the next input
                  if (value !== '' && index < otp.length - 1) {
                        inputRefs.current[index + 1].current.focus();
                  }
            }
      };

      const handleKeyDown = (index, event) => {
            // Move to the previous input on backspace if the input is empty
            if (event.key === 'Backspace' && index > 0 && otp[index] === '') {
                  inputRefs.current[index - 1].current.focus();
            }
      };

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
            
            if(phNumber.length<13 || phNumber.length>13){
                  Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Enter a valid number",
                  });
            }

            const response = await fetch("http://localhost:3000/api/fetchLoginCredentials" , {
                  method: "POST",
                  headers: {
                        'Content-Type':"application/json"
                  },
                  body: JSON.stringify({ contactNumber: phNumber})
            });
            let data = await response.json();
            if(response.ok){
                  
                  console.log("Contact no: " , data.userLoginData.contactNumber);
                  if (phNumber.length === 13) {
      
                        localStorage.setItem("UserPhoneNumber", data.userLoginData.contactNumber)
                        generateRecaptchaVerifier();
                        let appVeifier = window.recaptchaVerifier;
                        signInWithPhoneNumber(authentication, phNumber, appVeifier)
                              .then((confirmationResult) => {
                                    window.confirmationResult = confirmationResult;
                                    console.log("recaptcha verified!! and navigating to verifyOTP", confirmationResult);
                                    setCResult(confirmationResult);
                                    Swal.fire({
                                          position: "center",
                                          icon: "success",
                                          title: `otp sent to ${phNumber}`,
                                          showConfirmButton: false,
                                          timer: 1500
                                    });
                              })
                              .catch((error) => {
                                    console.log(error);
                                    Swal.fire({
                                          icon: "error",
                                          title: "Oops...",
                                          text: "Error in sending otp",
                                    });
                              })
                  }
                  

            } else {
                  Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "User not found!!",
                  });
            }

      }

      const handleVerifyOtp = ()=>{
            // verify otp and then redirect the user to forgot password page.
            // server - side OTP verification can be done using Firebase Admin SDK in a Node.js 
            // send otp from here to the server for verification.
            
            if ( CResult && CResult.confirm(enteredOtp)) {
                  console.log("verified");
                  navigate("/GotoForgotPassword")
            }
            else {
                  console.log("not verifies")
            }

      }


      return (
            <div>
                  <div className="container-fluid">
                        <div className="row">
                              <div className="col-sm-6">
                                    <img src= {verifyOtp} alt="VerifyOtp" />
                              </div>
                              <div className="col-sm-6">
                                    <TextField id="standard-basic" inputProps={{ maxLength: 13 }} label="Phone Number" variant="standard" onChange={(phNumber) => {
                                          setPhNumber(phNumber.target.value)
                                    }} />
                                    <Button onClick={handleSendotp} variant="contained">Send</Button>
                                    <div className="otp-container">
                                          {otp.map((digit, index) => (
                                                <input
                                                      key={index}
                                                      ref={inputRefs.current[index]}
                                                      type="text"
                                                      maxLength="1"
                                                      value={digit}
                                                      style={{margin:"12px"}}
                                                      className='otpInputbox'
                                                      onChange={(e) => handleChange(index, e.target.value)}
                                                      onKeyDown={(e) => handleKeyDown(index, e)}
                                                />
                                          ))}
                                    </div>
                                    <Button onClick={handleVerifyOtp} variant="contained">Verify</Button>
                                    <div id="recaptchaContainer">
                                          {/* recaptcha will be displayed in this div. */}
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default VerifyOtpComp;
