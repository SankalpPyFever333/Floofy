import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import BottomNavBar from './BottomNavBar';
import MainProfileComponent from '../Profile/DoctorProfile/MainProfileComponent';
import MainShopComp from '../shop/MainShopComp';
import MainHomeComp from '../HomeComponent/MainHomeComp';
import MainDisplayUserContent from '../Profile/DisplayAllUserContent/MainDisplayUserContent';
import MyPostCard from '../Profile/DisplayMyContent/MyPostCard';
import MainShowDoctorsList from '../ShowDoctorComponent/MainShowDoctorsList';

function HomePageContent() {

  const [clickedBtn , setClickBtn] = useState("Home");


  const handleBtnClick = (whichBtnClicked)=>{
    setClickBtn(whichBtnClicked)
  }

  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth= {false}>
          <Box style={{
            overflow:"auto",
            
          }} sx={{ bgcolor: 'bg-light-subtle', height: '78vh' }}>
            {clickedBtn === "Home" && <MainHomeComp/>}
            {clickedBtn === "Vet" &&  <MainShowDoctorsList/> }
            {clickedBtn === "Shop" && <MainShopComp/>}
            {/* {clickedBtn === "Profile" && <MyPostCard/> } */}
            {clickedBtn === "Profile" && <MainProfileComponent/> }
          </Box>
          
        </Container>
        <Container maxWidth = "sm">
          <BottomNavBar onButtonClick = {handleBtnClick}  />
        </Container>

      </React.Fragment>
    </div>
  )
}

export default HomePageContent
