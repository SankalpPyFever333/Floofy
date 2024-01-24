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
import MainAdminComp from '../AdminModule/MainAdminComp';

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

                        
                        {/* <section className="h-100 gradient-custom-2">
                              <div className="container-fluid py-5 h-100">
                                    <div className="row d-flex justify-content-center align-items-center h-100">
                                          <div className="col-12 col-lg-9 col-xl-7">
                                                <div className="card">
                                                      <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
                                                            <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                                                                  <img
                                                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                                                                        alt="Generic placeholder image"
                                                                        className="img-fluid img-thumbnail mt-4 mb-2"
                                                                        style={{ width: '150px', zIndex: 1 }}
                                                                  />
                                                                  <button type="button" className="btn btn-outline-dark" data-mdb-ripple-color="dark" style={{ zIndex: 1 }}>
                                                                        Edit profile
                                                                  </button>
                                                            </div>
                                                            <div className="ms-3" style={{ marginTop: '130px' }}>
                                                                  <h5>Andy Horwitz</h5>
                                                                  <p>New York</p>
                                                            </div>
                                                      </div>
                                                      <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                                                            <div className="d-flex justify-content-end text-center py-1">
                                                                  <div>
                                                                        <p className="mb-1 h5">253</p>
                                                                        <p className="small text-muted mb-0">Photos</p>
                                                                  </div>
                                                                  <div className="px-3">
                                                                        <p className="mb-1 h5">1026</p>
                                                                        <p className="small text-muted mb-0">Followers</p>
                                                                  </div>
                                                                  <div>
                                                                        <p className="mb-1 h5">478</p>
                                                                        <p className="small text-muted mb-0">Following</p>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                      <div className="card-body p-4 text-black">
                                                            <div className="mb-5">
                                                                  <p className="lead fw-normal mb-1">About</p>
                                                                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                                                                        <p className="font-italic mb-1">Web Developer</p>
                                                                        <p className="font-italic mb-1">Lives in New York</p>
                                                                        <p className="font-italic mb-0">Photographer</p>
                                                                  </div>
                                                            </div>
                                                            <div className="d-flex justify-content-between align-items-center mb-4">
                                                                  <p className="lead fw-normal mb-0">Recent photos</p>
                                                                  <p className="mb-0">
                                                                        <a href="#!" className="text-muted">
                                                                              Show all
                                                                        </a>
                                                                  </p>
                                                            </div>
                                                            <div className="row g-2">
                                                                  <div className="col mb-2">
                                                                        <img
                                                                              src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                                                                              alt="image 1"
                                                                              className="w-100 rounded-3"
                                                                        />
                                                                  </div>
                                                                  <div className="col mb-2">
                                                                        <img
                                                                              src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                                                                              alt="image 1"
                                                                              className="w-100 rounded-3"
                                                                        />
                                                                  </div>
                                                            </div>
                                                            <div className="row g-2">
                                                                  <div className="col">
                                                                        <img
                                                                              src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                                                                              alt="image 1"
                                                                              className="w-100 rounded-3"
                                                                        />
                                                                  </div>
                                                                  <div className="col">
                                                                        <img
                                                                              src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                                                                              alt="image 1"
                                                                              className="w-100 rounded-3"
                                                                        />
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </section> */}

                        <Stack direction="row" spacing={4}>
                              {/* <EditBioOfDoctor/> */}
                              <EditBio/>
                              <Button variant="outlined">Share Profile</Button>
                        </Stack>
                  </Container>
            </div>
      );
}

