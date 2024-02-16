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

function MainDoctorDashBoradComp() {
      const [selectedTimeFrame, setSelectedTimeFrame] = useState("Last Week")
      const { id } = useParams();

      const handleDeleteDoctor = async ()=>{
            // Write the delete function here.
            const deletedDoctor = await deleteDoctorByIDFromDb(id);
            if (!deletedDoctor) {
                  Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Error in adding product",
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
                  <div className="col-sm-2" style={{ margin:"1rem"}} >
                        <DropdownToSelectTime selectedTimeFrame={selectedTimeFrame} setSelectedTimeFrame={setSelectedTimeFrame} />
                  </div>
            </div>
            <div className="row">
                  <div className="col-sm-6">
                        <ShowTotalAppointmentsCard timeFrame={selectedTimeFrame} />
                  </div>
                  <div className="col-sm-5">
                        <ShowTotalRevenueGeneratedCard timeFrame={selectedTimeFrame} />
                  </div>
                  <div className="col-sm-1">
                        <Tooltip  title="Remove Doctor" placement="top">
                              <IconButton aria-label="delete" onClick={handleDeleteDoctor} >
                                    <DeleteIcon />
                              </IconButton>
                        </Tooltip>

                  </div>
            </div>

            <div className="row" style={{ margin:"20px" , maxHeight: '300px', overflowY: 'auto' }}>
                  <ShowDoctorReviews doctorId={id} />
            </div>

            <div className="row" style={{ margin: "20px", maxHeight: '300px', overflowY: 'auto' }}>
                  <ShowAppointmentHistory doctorId={id} />
            </div>

      </div>
      )
}

export default MainDoctorDashBoradComp
