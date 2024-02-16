import React, { useState } from 'react'
import { useParams } from 'react-router-dom'




function MainRescuerDashboard() {
  const { id } = useParams();
  return (
    <div>
      <div className="row">
        <div className="col-sm-6">
          Show total rescueing operation done till yet
        </div>
        <div className="col-sm-6">
          show total earnings
        </div>
      </div>

      <div className="row" style={{ margin: "20px", maxHeight: '300px', overflowY: 'auto' }}>
        {/* <ShowDoctorReviews doctorId={id} /> */}
        render table for Rescuers review
      </div>

      <div className="row" style={{ margin: "20px", maxHeight: '300px', overflowY: 'auto' }}>
        {/* <ShowAppointmentHistory doctorId={id} /> */}
        Render Table For showing total rescueing operation History of the rescuer done till yet.
      </div>

    </div>
  )
}

export default MainRescuerDashboard
