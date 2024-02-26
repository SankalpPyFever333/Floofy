// import Accordion from 'react-bootstrap/Accordion';

// function AccordianForDoctorData({DoctorInfoData}) {
//       return (
//             <Accordion defaultActiveKey="0">
//                   <Accordion.Item eventKey="0">
//                         <Accordion.Header>Experience</Accordion.Header>
//                         <Accordion.Body>
//                               <div className="docData">
//                                     <h5>
//                                           Expereince at:
//                                     </h5>
//                                     {DoctorInfoData.DoctorDetails.Experience.institutionName}
//                                     <h5>
//                                           StartDate:
//                                     </h5>
//                                     {DoctorInfoData.DoctorDetails.Experience.startDate}

//                                     <h5>
//                                           EndDate:
//                                     </h5>
//                                     {DoctorInfoData.DoctorDetails.Experience.endDate}
//                                     <h5>
//                                           Description:
//                                     </h5>
//                                     {DoctorInfoData.DoctorDetails.Experience.description}
//                               </div> 
//                         </Accordion.Body>
//                   </Accordion.Item>
//                   <Accordion.Item eventKey="1">
//                         <Accordion.Header>Specialzation</Accordion.Header>
//                         <Accordion.Body>
//                               <div className="docData">
//                                     <h5>
//                                           additionalTraining:
//                                     </h5>
//                                     {DoctorInfoData.DoctorDetails.Specialization.additionalTraining}
//                                     <h5>
//                                           areaOfSpecialization:
//                                     </h5>
//                                     {DoctorInfoData.DoctorDetails.Specialization.areaOfSpecialization}
//                               </div>
//                         </Accordion.Body>
//                   </Accordion.Item>
//                   <Accordion.Item eventKey="2">
//                         <Accordion.Header>Location</Accordion.Header>
//                         <Accordion.Body>
//                               <div>
//                                     <h5>
//                                           Location:
//                                     </h5>
//                                     {DoctorInfoData.DoctorDetails.LocationOfDoctor}
//                               </div>
//                         </Accordion.Body>
//                   </Accordion.Item>
//             </Accordion>
//       );
// }

// export default AccordianForDoctorData;


import Accordion from 'react-bootstrap/Accordion';

function AccordianForDoctorData({ DoctorInfoData }) {
      return (
            <Accordion defaultActiveKey="0">
                  {DoctorInfoData?.DoctorDetails && (
                        <>
                              <Accordion.Item eventKey="0">
                                    <Accordion.Header>Experience</Accordion.Header>
                                    <Accordion.Body>
                                          <div className="docData">
                                                <h5>Expereince at:</h5>
                                                {DoctorInfoData.DoctorDetails.Experience?.institutionName}
                                                <h5>StartDate:</h5>
                                                {DoctorInfoData.DoctorDetails.Experience?.startDate}
                                                <h5>EndDate:</h5>
                                                {DoctorInfoData.DoctorDetails.Experience?.endDate}
                                                <h5>Description:</h5>
                                                {DoctorInfoData.DoctorDetails.Experience?.description}
                                          </div>
                                    </Accordion.Body>
                              </Accordion.Item>
                              <Accordion.Item eventKey="1">
                                    <Accordion.Header>Specialzation</Accordion.Header>
                                    <Accordion.Body>
                                          <div className="docData">
                                                <h5>additionalTraining:</h5>
                                                {DoctorInfoData.DoctorDetails.Specialization?.additionalTraining}
                                                <h5>areaOfSpecialization:</h5>
                                                {DoctorInfoData.DoctorDetails.Specialization?.areaOfSpecialization}
                                          </div>
                                    </Accordion.Body>
                              </Accordion.Item>
                              <Accordion.Item eventKey="2">
                                    <Accordion.Header>Location</Accordion.Header>
                                    <Accordion.Body>
                                          <div>
                                                <h5>Location:</h5>
                                                {DoctorInfoData.DoctorDetails.LocationOfDoctor}
                                          </div>
                                    </Accordion.Body>
                              </Accordion.Item>
                        </>
                  )}
                  {!DoctorInfoData?.DoctorDetails && (
                        <Accordion.Item eventKey="0">
                              <Accordion.Header>No details available for this doctor</Accordion.Header>
                              <Accordion.Body>
                                    <p>Please check again later.</p>
                              </Accordion.Body>
                        </Accordion.Item>
                  )}
            </Accordion>
      );
}

export default AccordianForDoctorData;





