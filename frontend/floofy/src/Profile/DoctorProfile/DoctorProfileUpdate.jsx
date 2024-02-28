
import React from 'react'
import TextField from '@mui/material/TextField';
import AccordionInputDetails from './AccordionInputDetails';


function DoctorProfileUpdate() {
  return (
    <div>
      <div className="row">
            <div className="col-sm-6">
                  Image or animation of updation
            </div>
            <div className="col-sm-6">
                          <TextField style={{ margin: "12px" }} id="filled-basic" label="Name" variant="filled" />
                          <br />
                          <TextField style={{ margin: "12px" }} id="filled-basic" label="Username" variant="filled" />
                          <br />
                          <TextField style={{ margin: "12px" }} id="filled-basic" label="Email" variant="filled" />
                          <br />
                          <TextField style={{ margin: "12px" }} id="filled-basic" label="Phone " variant="filled" />
                          <br />
                          <AccordionInputDetails/>
            </div>
      </div>
    </div>
  )
}

export default DoctorProfileUpdate

