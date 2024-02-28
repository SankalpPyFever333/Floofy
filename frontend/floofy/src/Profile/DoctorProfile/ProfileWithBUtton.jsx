import React from 'react'
import MainDoctorDashBoradComp from '../../AdminModule/Doctors/DoctorsDashboard/MainDoctorDashBoradComp'
import EditBioOfDoctor from './EditBioOfDoctor'
import DoctorProfileUpdate from './DoctorProfileUpdate'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

function ProfileWithBUtton() {

  const navigate = useNavigate();
  const handleEditClick = ()=>{
    navigate('/doctorprofileedit')
  }

  const handleNavigatePostContent = ()=>{
    navigate("/createpost")
  }

  return (
    <div>
      <div className="row">
        <div className="col-sm-4">
          <p>Show image of doctor and also can edit it.</p>
        </div>
        <div className="col-sm-3">
          {/* <EditBioOfDoctor/> */}
          {/* <DoctorProfileUpdate/> */}
          <Button variant="info" onClick = {handleEditClick} >Edit Profile</Button>{' '}
        </div>

        <div className="col-sm-3">
          <p>Show Appointment btn to user.</p>
          <Button variant="info" onClick = {handleNavigatePostContent} >create post</Button>{' '}

        </div>

      </div>

      <MainDoctorDashBoradComp doctoridFromFrontend={localStorage.getItem("userId")} />

    </div>
  )
}

export default ProfileWithBUtton

// area wise searching
// inventory management
// content posting
// aggregation
// increase dataset
