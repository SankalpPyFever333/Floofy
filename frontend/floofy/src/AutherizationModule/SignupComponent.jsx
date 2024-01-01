import React from 'react'
import Lottie from "react-lottie";

import SignupStepper from './SignupStepper';
import SignLogComp from './SignLogComp';
import PickAvatarComp from './PickAvatarComp';
import WhatDefineYou from './WhatDefineYou';
function SignupComponent() {
  
  return (
    <div>
      <div className="stepComplete">
            <h3>Complete Your Account setup</h3>
      </div>
      <div className="stepperContaiiner">
            <span>steps to complete</span>
            <SignupStepper/>
      </div>
      <div className="logincinfo">
        <SignLogComp/>
        {/* <PickAvatarComp/> */}
        {/* <WhatDefineYou/> */}
      </div>
    </div>
  )
}

export default SignupComponent
