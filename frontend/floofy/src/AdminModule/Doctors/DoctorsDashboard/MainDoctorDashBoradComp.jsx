import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import ShowAppointmentHistory from './ShowAppointmenthistory';
import ShowDoctorReviews from './ShowDoctorReviews';
import ShowTotalAppointmentsCard from './ShowTotalAppointmentsCard';
import ShowTotalRevenueGeneratedCard from './ShowTotalRevenueGeneratedCard';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import DropdownToSelectTime from '../../OverviewOfData/DropdownToSelectTime';
import { deleteDoctorByIDFromDb } from './removeDoctorFromDashboard';
import Swal from 'sweetalert2';
import MainDoctorPersonalShow from './ShowPersonalinfo/MainDoctorPersonalShow';

function MainDoctorDashBoradComp({doctoridFromFrontend}) {
      const [selectedTimeFrame, setSelectedTimeFrame] = useState("Last Week")

      const { id } = useParams();
      console.log("id int the main Doc param Dashbrd" , id)

      const isDoctorView = !!doctoridFromFrontend;
      const doctorId = isDoctorView ? doctoridFromFrontend : id;

      const handleDeleteDoctor = async ()=>{
            // Write the delete function here.
            const deletedDoctor = await deleteDoctorByIDFromDb(doctorId);
            if (!deletedDoctor) {
                  Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Error in deleting",
                  });
            }
            else{
                  Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Deleted successfully",
                        showConfirmButton: false,
                        timer: 1500
                  });
            }
      }


      return (
      <div>
            <div className="row">
                  <div className="col-sm-2 " style={{ margin:"1rem"}} >
                        <DropdownToSelectTime  selectedTimeFrame={selectedTimeFrame} setSelectedTimeFrame={setSelectedTimeFrame} />
                        {
                                    (!isDoctorView && (<Tooltip title="Remove Doctor" placement="top">
                                          <IconButton aria-label="delete" onClick={handleDeleteDoctor} >
                                                <DeleteIcon style={{ color: "red" }} />
                                          </IconButton>
                                    </Tooltip>)  )
                        }
                        
                  </div>
            </div>
            <div className="row">
                  <div className="col-sm-5">
                        <div className="row" >
                              <div className="col-sm-4">
                                    <ShowTotalAppointmentsCard timeFrame={selectedTimeFrame} doctorId={id} />
                              </div>

                              <div className="col-sm-4">
                                    <ShowTotalRevenueGeneratedCard timeFrame={selectedTimeFrame} doctorIdParam={id} />
                              </div>
                        </div>
                        
                  </div>
                  <div className="col-sm-4">
                              <MainDoctorPersonalShow doctorid={doctorId} />
                  </div>
                  
            </div>

            <div className="row" style={{ margin:"20px" , maxHeight: '300px', overflowY: 'auto' }}>
                        <ShowDoctorReviews doctorId={doctorId} />
            </div>

            <div className="row" style={{ margin: "20px", maxHeight: '300px', overflowY: 'auto' }}>
                        <ShowAppointmentHistory doctorId={doctorId} />
            </div>

      </div>
      )
}

export default MainDoctorDashBoradComp

