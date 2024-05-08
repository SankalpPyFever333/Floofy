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

      const isValidPhoneNumber = (phoneNumber) => {
            // Remove any non-digit characters from the phone number
            const strippedPhoneNumber = phoneNumber.replace(/\D/g, '');
            // Check if the stripped phone number has a length of exactly 10 digits
            if (strippedPhoneNumber.length !== 10) {
                  return false;
            }
            // Check if the stripped phone number is the same as the original phone number
            // This ensures that the phone number only contains digits
            return strippedPhoneNumber === phoneNumber;
      };

      const handleSendotp = async () => {
            const countryCode = "+91";
            const fullPhoneNumber = countryCode+phNumber;
            if (!isValidPhoneNumber(phNumber)) {
                  Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Enter a valid 10-digit number without any special characters.",
                  });
            }


            const response = await fetch("http://localhost:3000/api/fetchLoginCredentials" , {
                  method: "POST",
                  headers: {
                        'Content-Type':"application/json"
                  },
                  body: JSON.stringify({ contactNumber: fullPhoneNumber})
            });
            let data = await response.json();
            if(response.ok){
                  
                  console.log("Contact no: " , data.userLoginData.contactNumber);
                  if (phNumber.length === 10) {
      
                        localStorage.setItem("UserPhoneNumber", data.userLoginData.contactNumber)
                        generateRecaptchaVerifier();
                        let appVeifier = window.recaptchaVerifier;
                        signInWithPhoneNumber(authentication, fullPhoneNumber, appVeifier)
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


      const handleVerifyOtp = async () => {
            try {
                  if (CResult) {
                        // Verify the OTP and wait for the result
                        const userCredential = await CResult.confirm(enteredOtp);

                        // If OTP verification is successful, navigate to the forgot password page
                        console.log("OTP verified successfully:", userCredential);
                        Swal.fire({
                              position: "center",
                              icon: "success",
                              title: 'Verified Successfully',
                              showConfirmButton: false,
                              timer: 1500
                        });
                        navigate("/GotoForgotPassword");
                  } else {
                        // If CResult is null or undefined, display an error message
                        Swal.fire({
                              icon: "error",
                              title: "Oops...",
                              text: "Error: No confirmation result available. Please send OTP again.",
                        });
                  }
            } catch (error) {
                  // Handle errors during OTP verification
                  if (error.code === "auth/invalid-verification-code") {
                        // Display an alert message for invalid OTP
                        Swal.fire({
                              icon: "error",
                              title: "Oops...",
                              text: "Entered wrong OTP! Please try again.",
                        });
                  } else {
                        // For other errors, log the error and display a generic error message
                        console.error("Error verifying OTP:", error);
                        Swal.fire({
                              icon: "error",
                              title: "Oops...",
                              text: "Something went wrong! Please try again later.",
                        });
                  }
            }
      };

      return (
            <div>
                  <div className="container-fluid">
                        <div className="row">
                              <div className="col-sm-6">
                                    <img src={verifyOtp} alt="VerifyOtp" style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", borderRadius: "10px" }} />
                              </div>
                              <div className="col-sm-6">
                                    <TextField id="standard-basic" inputProps={{ maxLength: 10 }} className='shadow m-3' label="Phone Number" variant="standard" onChange={(phNumber) => {
                                          setPhNumber(phNumber.target.value)
                                    }} style={{ borderRadius: "10px" }} />
                                    <Button onClick={handleSendotp} className='shadow m-3' variant="contained" style={{ borderRadius: "10px" }}>Send</Button>
                                    <div className="otp-container">
                                          {otp.map((digit, index) => (
                                                <input
                                                      key={index}
                                                      ref={inputRefs.current[index]}
                                                      type="text"
                                                      maxLength="1"
                                                      value={digit}
                                                      // style={{ margin: "12px", width: "40px", height: "40px", textAlign: "center", border: "1px solid #ced4da", borderRadius: "5px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}
                                                      className='otpInputbox'
                                                      onChange={(e) => handleChange(index, e.target.value)}
                                                      onKeyDown={(e) => handleKeyDown(index, e)}
                                                />
                                          ))}
                                    </div>
                                    <Button onClick={handleVerifyOtp} variant="contained" style={{ borderRadius: "10px", marginTop: "20px" }}>Verify</Button>
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
