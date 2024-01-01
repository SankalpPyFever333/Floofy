// It will take name and mobile number for verification for all the user.
import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
function ShowCommonForm() {
      return (
            <div style={{
                  boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px", height: "25rem" , 
                  width: "30vw",
                  borderRadius: "11px",
                  margin: "2rem",
                  marginLeft: "10rem", 
                  position:"absolute",
                  top:"10rem",
                  left:"3rem"
            }}>
                  <Box
                        component="form"
                        sx={{
                              '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                  >
                        <span>place a animation and a text related to it</span>
                        <TextField style={{margin:"2rem"}}  id="standard-basic" label="Name" variant="standard" />
                        <TextField style={{margin:"2rem"}}  id="standard-basic" label="Phone number" variant="standard" />
                        <Button variant="contained">Save</Button>
                  </Box>
            </div>
      )
}

export default ShowCommonForm
