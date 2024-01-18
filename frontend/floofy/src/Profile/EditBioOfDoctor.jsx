import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Swal from 'sweetalert2';

export default function EditBioOfDoctor() {
      const [open, setOpen] = React.useState(false);
      const [name , setName] = React.useState('')
      const [Username , setUserName] = React.useState('')
      const [phone , setPhone] = React.useState('')
      const [Email , setEmail] = React.useState('')
      const [Experience , setExperience] = React.useState('')
      const [Education , setEducation] = React.useState('')
      const [Specialization , setSpecialization] = React.useState('')
      const [SocialMediaLink, setSocialMediaLink] = React.useState('')

      const handleClickOpen = () => {
            setOpen(true);
      };

      const handleClose = () => {
            setOpen(false);
      };

      const handleUpdateDoctor = async (e)=>{
            e.preventDefault()
            // getting error of circular reference.

            // Also check for unique username before updating the database.
            try {
                  const Doctor_Response = await fetch("http://localhost:3000/api/EditDoctorProfileBio" , {
                        method:"POST",
                        headers:{
                              'Content-Type':"application/json"
                        } , 
                        body: JSON.stringify({
                              Name:name,
                              Username:Username,
                              Phone:phone,
                              Email:Email,
                              Experience:Experience,
                              Education:Education,
                              Specialization:Specialization,
                              SocialMediaLink:SocialMediaLink,
                        })      
                  });
      
                  if(Doctor_Response.ok){
                        await Swal.fire({
                              position: "center",
                              icon: "success",
                              title: "Profile saved successfully",
                              showConfirmButton: false,
                              timer: 1500
                        });
                        handleClose()
                  }
                  else{
                        await Swal.fire({
                              icon: "error",
                              title: "Oops...",
                              text: "Something went wrong!",
                              // footer: '<a href="#">Why do I have this issue?</a>'
                        });
                        handleClose()
                  }
                  const data = await Doctor_Response.json();
                  console.log(data)
            } catch (error) {
                  console.error("error occured", error)
            }
            
      }

      return (
            <React.Fragment>
                  <Button variant="outlined" onClick={handleClickOpen}>
                        Edit Profile
                  </Button>
                  <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogContent>
                              
                              <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Name"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    onChange={(name)=>{
                                          setName(name.target.value)
                                    }}
                              />
                              <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Userame"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    onChange={(username)=>{
                                          setUserName(username.target.value)
                                    }}
                              />
                              <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Phone"
                                    type="text"
                                    fullWidth
                                    multiline
                                    maxRows={3}
                                    variant="standard"
                                    onChange={(phone)=>{
                                          setPhone(phone.target.value)
                                    }}
                              />
                              <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Email"
                                    type="text"
                                    fullWidth
                                    multiline
                                    maxRows={3}
                                    variant="standard"
                                    onChange={(Email)=>{
                                          setEmail(Email)
                                    }}
                              />
                              <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Experience"
                                    type="text"
                                    fullWidth
                                    multiline
                                    maxRows={3}
                                    variant="standard"
                                    onChange={(Experience)=>{
                                          setExperience(Experience.target.value)
                                    }}
                              />
                              <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Specialization"
                                    type="text"
                                    fullWidth
                                    multiline
                                    maxRows={3}
                                    variant="standard"
                                    onChange={(Specialization)=>{
                                          setSpecialization(Specialization.target.value)
                                    }}
                              />
                              <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Education"
                                    type="text"
                                    fullWidth
                                    multiline
                                    maxRows={3}
                                    variant="standard"
                                    onChange={(Education)=>{
                                          setEducation(Education.target.value)
                                    }}
                              />
                              <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Social Media Link"
                                    type="text"
                                    fullWidth
                                    multiline
                                    maxRows={3}
                                    variant="standard"
                                    onChange={(SclLinks)=>{
                                          setSocialMediaLink(SclLinks.target.value)
                                    }}
                              />
                        </DialogContent>
                        <DialogActions>
                              <Button onClick={handleClose}>Cancel</Button>
                              <Button onClick={handleUpdateDoctor}>Update</Button>
                        </DialogActions>
                  </Dialog>
            </React.Fragment>
      );
}



