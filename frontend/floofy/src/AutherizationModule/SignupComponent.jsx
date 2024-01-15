import React from 'react'
import Lottie from "react-lottie";

import SignupStepper from './SignupStepper';
import SignLogComp from './SignLogComp';


function SignupComponent() {
  
  return (
    <div>
      <div className="stepComplete">
            <h3>Complete Your Account setup</h3>
      </div>
      {/* <div className="stepperContaiiner">
            <span>steps to complete</span>
            <SignupStepper/>
      </div> */}
      <div className="logincinfo">
        <SignLogComp/>
        {/* below two cmponents will render when user click on the next button in the Stepper */}
        {/* <PickAvatarComp/>
        <WhatDefineYou/> */}
      </div>
    </div>
  )
}

export default SignupComponent
