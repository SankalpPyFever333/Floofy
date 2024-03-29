import React, { useEffect, useState } from 'react'
import ShowDoctorsList from './ShowDoctorsList'
// import { fetchAllDoctorsFromDb } from '../AdminModule/Doctors/fetchDoctorsFromDb';
import { getDoctorAll } from './fetchAllDoctorData';

function MainShowDoctorsList() {
      const [doctorData,  setDoctorData] = useState([]);

      
      const getAllDoctors = async () => {
            const responseDoctor = await getDoctorAll();
            const jsonDoctor = await responseDoctor.json();
            // console.log("josnDoctorIn component: " , jsonDoctor);
            setDoctorData(jsonDoctor);
      }

      useEffect(()=>{
            getAllDoctors();
      }, []);

  return (
    <div>
      <h3 className='text-center' >{doctorData.length} doctors</h3>
      {
            doctorData.map((singleDoctor)=>{
                  return <ShowDoctorsList joinedFloofy={singleDoctor.Username.createdAt} education={singleDoctor.Education.degree} email={singleDoctor.Email} username={singleDoctor.Username.username} cardId={singleDoctor._id} />
            })
      }

    </div>
  )
}

export default MainShowDoctorsList
