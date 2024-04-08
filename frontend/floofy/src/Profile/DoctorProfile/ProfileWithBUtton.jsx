import React from 'react'
import MainDoctorDashBoradComp from '../../AdminModule/Doctors/DoctorsDashboard/MainDoctorDashBoradComp'
import EditBioOfDoctor from './EditBioOfDoctor'
import DoctorProfileUpdate from './DoctorProfileUpdate'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import PostCardAllUser from '../DisplayAllUserContent/PostCard'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import BookAppointmentWithDoctor from './BookAppointmentWithDoctor'
import MyPostCard from '../DisplayMyContent/MyPostCard'

function ProfileWithBUtton() {

  const navigate = useNavigate();
  const handleEditClick = ()=>{
    navigate(`/doctorprofileedit/${localStorage.getItem("userId")}`)
  }

  const handleNavigatePostContent = ()=>{
    navigate("/createpost")
  }

  // const handleNavigateBookAppointment = ()=>{
  //   navigate(`/bookappointment/${localStorage.getItem("userId")}`)
  // }

  return (
    <div>
        

      <div className="row container-fluid bg-light-subtle">
        <div className="col-sm-4">
          <div className="d-flex gap-3">
            <Button variant="info" onClick={handleEditClick} >Edit Profile</Button>{' '}
            <Button variant="info" onClick={handleNavigatePostContent} >create post</Button>{' '}
            {/* <BookAppointmentWithDoctor/> */}

          </div>
        </div>
        
        <div className="col">
          <Container maxWidth={false}>
            <Box style={{
              overflow: "auto",
              
            }} sx={{ bgcolor: 'bg-light-subtle', height: '78vh' }}>
                {/* <PostCardAllUser/> */}
                <MyPostCard/>
            </Box>

          </Container>

        </div>
      </div>

      <MainDoctorDashBoradComp doctoridFromFrontend={localStorage.getItem("userId")} />

    </div>
  )
}

export default ProfileWithBUtton
