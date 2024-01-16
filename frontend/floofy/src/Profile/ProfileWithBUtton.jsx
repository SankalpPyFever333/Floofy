import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import ProfileIconWithBadge from '../components/ProfileIconWithBadge';
import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import EditBioOfDoctor from './EditBioOfDoctor';
import CreatePostVideoText from './CreatePostVideoText';
import EditRescuerBioDetails from './EditRescuerBioDetails';
import EditNOrmalUserBioDetails from './EditNormalUserBioDetails';

const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
}));

export default function ProfileWithBUtton() {
      const [openEditPro, setOPenEditPro] = React.useState(localStorage.getItem("userType"));
      
      const EditBio = ()=>{
            if(openEditPro==="Doctor"){
                  return <EditBioOfDoctor/>
            }
            else if(openEditPro === "Rescuer"){
                  return <EditRescuerBioDetails/>
            }
            else if(openEditPro === "User"){
                  return <EditNOrmalUserBioDetails/>
            }

      }


      return (
            <div>
                  <Container maxWidth = "sm" >
                        <div style={{display:"flex" , justifyContent:"space-between" }}>
                              <span>Username</span>
                              <CreatePostVideoText/>
                              
                        </div>
                        
                        
                        <Stack
                              direction={{ xs: 'column', sm: 'row' }}
                              spacing={{ xs: 1, sm: 2, md: 4 }}
                        >
                              <IconButton>
                                    <Item> <ProfileIconWithBadge/> </Item>
                              </IconButton>
                              <IconButton>
                                    <Item>Post</Item>
                                    
                              
                              </IconButton>
                              <IconButton>
                                    <Item>Followers</Item>
                                    
                              </IconButton>
                              <IconButton>
                                    <Item>Following</Item>
                              </IconButton>

                        </Stack>
                        <Box
                              component="form"
                              sx={{
                                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                              }}
                              noValidate
                              autoComplete="off"
                        >
                              <div>
                                    <TextField
                                          id="outlined-multiline-flexible"
                                          label="Bio"
                                          multiline
                                          maxRows={4}
                                          
                                    />
                              </div>
                        </Box>

                        <Stack direction="row" spacing={4}>
                              {/* <EditBioOfDoctor/> */}
                              <EditBio/>
                              <Button variant="outlined">Share Profile</Button>
                        </Stack>
                  </Container>
            </div>
      );
}

