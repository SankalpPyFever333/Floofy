import React from 'react'
import ShowDoctorsList from './ShowDoctorsLIst'

function MainDoctorsComp() {
  return (
    <div>
      <h3>Doctors list</h3>
      <h4>
        upon clicking on the list item , navigate to the selected doctos dashboad.
      </h4>
      
      <ShowDoctorsList/>

    </div>
  )
}

export default MainDoctorsComp
