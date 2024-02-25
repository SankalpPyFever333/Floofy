import React, { useEffect } from 'react'
import ShowDoctorInfo from './ShowDoctorInfo'
import { fetchCompleteDetails } from './fetchCompleteDetailsOfDoctor'

function MainDoctorPersonalShow({doctorid}) {

  const fetchDoctorCompleteResponse = async()=>{
    const responseDocData = await fetchCompleteDetails(doctorid);
    const jsonResponseDocData = await responseDocData.json();
    console.log("Complete doctor data:" , jsonResponseDocData);
  }

  useEffect(()=>{

    const callDocdata = async()=>{
      const docdata = await  fetchDoctorCompleteResponse();
    }

    callDocdata();
  },[])

  // Show above data getting from backend


  return (
    <div>
      <span>Username:</span>
      <br />
      <span>name:</span>
      <br />
      <span>Email:</span>
      <br />
      <span>Phone:</span>
      <br />
      
      {/* Rest details show in that offcanvas */}

      <ShowDoctorInfo/>
    </div>
  )
}

export default MainDoctorPersonalShow

// in this , you have to fetch all the information from the doctor model and show it here.

