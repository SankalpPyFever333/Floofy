import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import BottomNavBar from './BottomNavBar';
import MainProfileComponent from '../Profile/MainProfileComponent';
import MainShopComp from '../shop/MainShopComp';

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
          <Box sx={{ bgcolor: '#e0e0e0', height: '78vh' }}>
            {clickedBtn === "Home" && <div>This is home</div>}
            {clickedBtn === "Vet" && <div>This is Vet component</div>}
            {clickedBtn === "Shop" && <MainShopComp/>}
            {clickedBtn === "Profile" && <MainProfileComponent/>}
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
