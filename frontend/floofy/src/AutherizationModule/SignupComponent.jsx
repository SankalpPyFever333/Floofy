import React from 'react'
import Lottie from "react-lottie";
import "./SignLogComp.css"
import SignupStepper from './SignupStepper';
import SignLogComp from './SignLogComp';
import SignupImage from "../Assets/RegisterImage.webp"
import welcats from "../Assets/RegisterImage.webp"
import videoSource from "../Assets/Login.mp4"

function SignupComponent() {
  
  return (
    <>
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-5">
              {/* <img className='w-100' src={welcats} alt="" /> */}
              <video autoPlay loop muted className="responsive-video">
                <source src={videoSource} type="video/mp4" />
              </video>
            </div>
            <div className="col-sm-6">
              <div style={{ margin: "20px" }} className="stepComplete">
                <h4>Complete Your Account setup</h4>
              </div>

              <div className="logincinfo">
                <SignLogComp />
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default SignupComponent
