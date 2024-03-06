export const saveUpdatedDataDoctor = async(doctorId , name , username , phone , email , expereince , location , specialization )=>{
      const saveDoctorData = await fetch(
        `http://localhost:3000/api/EditDoctorProfileBio/${doctorId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            Name: name,
            Username: username,
            Phone: phone,
            Email: email,
            Experience: expereince,
            Specialization:specialization,
            LocationOfDoctor: location,
          }),
        }
      );

      if(saveDoctorData.ok){
            return await saveDoctorData.json();
      }
      else{
            console.log("Error is " , saveDoctorData.status)
      }
}

