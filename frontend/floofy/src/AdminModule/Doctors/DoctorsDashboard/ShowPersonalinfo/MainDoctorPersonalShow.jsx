import React, { useEffect, useState } from 'react'
import ShowDoctorInfo from './ShowDoctorInfo'
import { fetchCompleteDetails } from './fetchCompleteDetailsOfDoctor'

function MainDoctorPersonalShow({doctorid}) {

  const [jsonDoctorDetails , setJsonDoctorDetails] = useState(null);

  const fetchDoctorCompleteResponse = async()=>{
    const responseDocData = await fetchCompleteDetails(doctorid);
    const jsonResponseDocData = await responseDocData.json();
    console.log("Complete doctor data:" , jsonResponseDocData);
    setJsonDoctorDetails(jsonResponseDocData);
  }

  useEffect(()=>{

    const callDocdata = async()=>{
      const docdata = await  fetchDoctorCompleteResponse();
    }

    callDocdata();
  },[doctorid])

  // Show above data getting from backend
  // console.log("Doctor experience is: ", jsonDoctorDetails.
  //   DoctorDetails.Experience.description);

  // console.log("Education is: ", jsonDoctorDetails.DoctorDetails.Education.completionYear)

  // console.log("Email is: ", jsonDoctorDetails.DoctorDetails.Email)

  if (!jsonDoctorDetails) {
    return <div>Loading...</div>; // or any loading indicator
  }

  if (!jsonDoctorDetails.DoctorDetails){
      return <div>No details to display</div>
  }

  return (
    <div>
      <h5 style={{display:"inline" , marginRight:"1rem"}}>Username: </h5>
      <span>{jsonDoctorDetails.DoctorDetails.Username.username} </span>
      <br />
      <br />
      <span>name: {jsonDoctorDetails.DoctorDetails.Name} </span>
      <br />
      <br />
      <span>Email: {jsonDoctorDetails.DoctorDetails.Email} </span>
      <br />
      <br />
      <span>Phone: {jsonDoctorDetails.DoctorDetails.Phone} </span>
      <br />
      <br />
      
      {/* Rest details show in that offcanvas */}

      <ShowDoctorInfo DoctorDetailsProp={jsonDoctorDetails} />
    </div>
  )
}

export default MainDoctorPersonalShow

// in this , you have to fetch all the information from the doctor model and show it here.

