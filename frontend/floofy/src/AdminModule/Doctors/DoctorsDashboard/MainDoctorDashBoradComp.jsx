import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import ShowAppointmentHistory from './ShowAppointmenthistory';
import ShowDoctorReviews from './ShowDoctorReviews';
import ShowTotalAppointmentsCard from './ShowTotalAppointmentsCard';
import ShowTotalRevenueGeneratedCard from './ShowTotalRevenueGeneratedCard';



function MainDoctorDashBoradComp() {
      const { id } = useParams();
      return (
      <div>
            <div className="row">
                  <div className="col-sm-6">
                        <ShowTotalAppointmentsCard/>
                  </div>
                  <div className="col-sm-6">
                        <ShowTotalRevenueGeneratedCard/>
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
