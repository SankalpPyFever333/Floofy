
import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import AccordionInputDetails from './AccordionInputDetails';
import prflUpdate from "../../Assets/UpdateProfile.jpg"
import { saveUpdatedDataDoctor } from './saveUpdatedDataDoctor';
import Swal from 'sweetalert2';

function DoctorProfileUpdate() {

  const [name , setName] = useState('');
  const [username , setUsername] = useState('');
  const [phone , setPhone] = useState('');
  const [email , setEmail] = useState('');
  const [expereince , setExpereince] = useState({});
  const [location , setLocation] = useState('');
  const [licenseNumber , setLicenseNumber] = useState('');
  const [specialization , setSpecialization] = useState({});
  
  const handleSaveUserData = async()=>{
    try {
      const updateDoctor = await saveUpdatedDataDoctor(localStorage.getItem("userId") , name , username , phone , email , expereince , location , specialization , licenseNumber);
      console.log(updateDoctor)
      if(updateDoctor){
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Updated successfully",
          showConfirmButton: false,
          timer: 1500
        });
      }
        else{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Error in updating",
        });
        }
    } catch (error) {
      console.log("Error in updating", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Internal server ",
      });
    }
  
  }


  return (
    <div>
      <div className="row">
            <div className="col-sm-6">
                  <img src= {prflUpdate} alt="" />
            </div>
            <div className="col-sm-6">
                          <p className='shadow w-75 fs-6 rounded mt-4 text-center text-danger' >
                            Edit Profile
                          </p>
                          <TextField  className='rounded w-50 shadow' onChange={(e)=> setName(e.target.value)}  style={{ margin: "12px" }} id="filled-basic" label="Name" variant="filled" />
                          <br />
                          {/* <TextField className='rounded w-50 shadow' style={{ margin: "12px" }} id="filled-basic" onChange={(e) => setUsername(e.target.value)} label="Username" variant="filled" /> */}
                          <br />
                          <TextField className='rounded w-50 shadow' style={{ margin: "12px" }} id="filled-basic" onChange={(e) => setEmail(e.target.value)} label="Email" variant="filled" />
                          <br />
                          <TextField className='rounded w-50 shadow' style={{ margin: "12px" }} id="filled-basic" onChange={(e) => setPhone(e.target.value)} label="Phone " variant="filled" />
                          <br />
                          <AccordionInputDetails SetExpereince={setExpereince} SetLocation={setLocation} SertSpecialization={setSpecialization}  />
                          <TextField className='rounded w-50 shadow' style={{ margin: "12px" }} id="filled-basic" onChange={(e) => setLicenseNumber(e.target.value)} label="License Id" variant="filled" />
                          <br />
                          <button type="button" onClick={handleSaveUserData} className="btn btn-info">Save</button>
            </div>
      </div>
    </div>
  )
}

export default DoctorProfileUpdate

