import React from 'react'
import MainDoctorDashBoradComp from '../../AdminModule/Doctors/DoctorsDashboard/MainDoctorDashBoradComp'
import EditBioOfDoctor from './EditBioOfDoctor'

function ProfileWithBUtton() {
  return (
    <div>
      <div className="row">
        <div className="col-sm-4">
          <p>Sho image of doctor and also can edit it.</p>
        </div>
        <div className="col-sm-3">
          <EditBioOfDoctor/>
        </div>

        <div className="col-sm-3">
          <p>Show Appointment btn to user.</p>
        </div>

      </div>

      <MainDoctorDashBoradComp doctoridFromFrontend={localStorage.getItem("userId")} />

    </div>
  )
}

export default ProfileWithBUtton

