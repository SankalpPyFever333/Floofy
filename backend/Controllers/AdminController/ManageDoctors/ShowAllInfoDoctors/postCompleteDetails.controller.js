const DoctorModel = require("../../../../Modals/DoctorModals/Doctor.modal");

const saveCompleteDoctorDetails = async(req,res)=>{
      const {
        Name,
        Username,
        Phone,
        Email,
        Experience,
        Education,
        Specialization,
        LocationOfDoctor,
        LicenseNumber,
      } = req.body;

      const { institutionName, startDate, endDate, description } = Experience;

      const {degree , institution ,completionYear , fieldOfStudy} = Education;
      const {areaOfSpecialization ,  additionalTraining} = Specialization;


      try {
            const saveResponse = new DoctorModel({
              Name,
              Username,
              Phone,
              Email,
              Experience: {
                institutionName: institutionName,
                startDate: startDate,
                endDate: endDate,
                description: description,
              },
              Education: {
                degree: degree,
                institution: institution,
                completionYear: completionYear,
                fieldOfStudy: fieldOfStudy,
              },
              Specialization: {
                areaOfSpecialization: areaOfSpecialization,
                additionalTraining: additionalTraining,
              },
              LocationOfDoctor,
              LicenseNumber,
            });

            await saveResponse.save();
            res.status(200).json({message:"Details saved successfully"})

      } catch (error) {
            console.log("error is: " , error);
            res.status(500).json({message:"Internal server error"})
      }
}

module.exports = saveCompleteDoctorDetails;
