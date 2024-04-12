import React, { useEffect, useState } from 'react'
import ShowDoctorsList from './ShowDoctorsList'
// import { fetchAllDoctorsFromDb } from '../AdminModule/Doctors/fetchDoctorsFromDb';
import { getDoctorAll } from './fetchAllDoctorData';
import SearchAndAppbar from '../shop/SearchAndAppbar';
import SearchDoctor from './SearchDoctor';

function MainShowDoctorsList() {
      const [doctorData,  setDoctorData] = useState([]);
      const [searchQuery, setSearchQuery] = useState('');
      
      const getAllDoctors = async () => {
            const responseDoctor = await getDoctorAll();
            const jsonDoctor = await responseDoctor.json();
            // console.log("josnDoctorIn component: " , jsonDoctor);
            setDoctorData(jsonDoctor);
      }

      useEffect(()=>{
            getAllDoctors();
      }, []);

      console.log("doctor data list is ; " ,  doctorData)

      const filteredDoctorList = doctorData.filter((singleDoctor) => singleDoctor.Username.username.toLowerCase().includes(searchQuery.toLowerCase()) || singleDoctor.LocationOfDoctor.toLowerCase().includes(searchQuery.toLowerCase())  )

  return (
    <div>
      
      <SearchDoctor setSearchQuery={setSearchQuery} />
      {
                  filteredDoctorList.map((singleDoctor)=>{
                  return <ShowDoctorsList joinedFloofy={singleDoctor.Username.createdAt} email={singleDoctor.Email} username={singleDoctor.Username.username} cardId={singleDoctor._id} doctorId={singleDoctor.Username._id} LicenseNumber={singleDoctor.LicenseNumber} additionalTraining={
                       singleDoctor.Specialization.additionalTraining} LocationOfDoctor={singleDoctor.LocationOfDoctor}  />
            })
      }

    </div>
  )
}

export default MainShowDoctorsList
