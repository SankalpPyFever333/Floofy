import React, { useState } from 'react'
import { useParams } from 'react-router-dom'



function MainDoctorDashBoradComp() {
      const { id } = useParams();
      console.log("Id in the dashboard: ", id)

  return (
    <div>
      
    </div>
  )
}

export default MainDoctorDashBoradComp
