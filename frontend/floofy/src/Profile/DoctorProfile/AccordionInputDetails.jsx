
import Accordion from 'react-bootstrap/Accordion';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import BasicDateRangePicker from './DateRangePicker';


function AccordionInputDetails({SetExpereince , SetLocation , SertSpecialization }) {
     
      const [institutionName , setInstitutionName] = useState();
      const [description , setDescription] = useState();
      const [additionalTraining , setAdditionalTraining] = useState();
      const [areaOFSpecialization , setAreaOfSpecialization] = useState();
      const [startDate, setStartDate] = useState();
      const [endDate, setEndDate] = useState();

      const [experienceDetails, setExperienceDetails] = useState({
            startDate: '', // Initial value for startDate
            endDate: '', // Initial value for endDate
            institutionName: '', // Initial value for institutionName
            description: '', // Initial value for description
            // Add more properties as needed
      });

      const handleSaveExperienceOnExit = ()=>{
            const experienceData = {
                  ...experienceDetails , 
                  startDate: startDate || experienceDetails.startDate ,
                  endDate: endDate || experienceDetails.endDate ,
                  institutionName: institutionName|| experienceDetails.institutionName,
                  description: description|| experienceDetails.description,
                  
            };
            // console.log("Start Date:" , experienceData.startDate);
            // console.log("descriptioL :" , experienceData.description);
            // console.log("EndDate: " , endDate);
            SetExpereince(experienceData);
      }

      const handleSaveSpecialization = ()=>{
            const specializationData = {
                  additionalTraining: additionalTraining,
                  areaOFSpecialization : areaOFSpecialization
            }
            // console.log("Asre: " , areaOFSpecialization)
            // console.log("training : " , additionalTraining)
            SertSpecialization(specializationData)
      }

      return (
            <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0" style={{margin:"12px"}}>
                        <Accordion.Header >Experience</Accordion.Header>
                        <Accordion.Body onExit={handleSaveExperienceOnExit} >
                              <TextField onChange={(e)=> setInstitutionName(e.target.value)} className='rounded w-50 shadow p-2 m-2' id="filled-basic"  label="Institution Name" variant="filled" />
                              
                              <BasicDateRangePicker SetstartDate={setStartDate} SetendDate={setEndDate} />
                              
                              <TextField
                                    id="outlined-multiline-flexible"
                                    label="Description"
                                    multiline
                                    maxRows={4}
                                    className='rounded w-50 shadow p-2 m-2'
                                    onChange={(e)=> setDescription(e.target.value)}
                              />
                        </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" style={{ margin: "12px" }} >
                        <Accordion.Header >Location</Accordion.Header>
                        <Accordion.Body>
                              <TextField  onChange={(e)=> SetLocation(e.target.value) } className='rounded w-50 shadow p-2 m-2' id="filled-basic" label="Address" variant="filled" />
                              
                        </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2" style={{ margin: "12px" }} >
                        <Accordion.Header  >Specialization</Accordion.Header>
                        <Accordion.Body onExit={handleSaveSpecialization} >
                              <TextField onChange={(e) => setAdditionalTraining(e.target.value)} className='rounded w-50 shadow p-2 m-2' style={{ margin: "12px" }} id="filled-basic" label="Any additional Trainig" variant="filled" />
                              <br />
                              <TextField onChange={(e) => setAreaOfSpecialization(e.target.value)} className='rounded w-50 shadow p-2 m-2' id="filled-basic" label="Area of specialization" variant="filled" />
                        </Accordion.Body>
                  </Accordion.Item>
            </Accordion>
      );
}

export default AccordionInputDetails;



