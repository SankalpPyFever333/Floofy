import Accordion from 'react-bootstrap/Accordion';

function AccordianForDoctorData() {
      return (
            <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                        <Accordion.Header>Experience</Accordion.Header>
                        <Accordion.Body>
                              Expereince at:  
                              Time:
                              Description: 
                        </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                        <Accordion.Header>Specialzation</Accordion.Header>
                        <Accordion.Body>
                              Show All info about this specialzation
                        </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                        <Accordion.Header>Location</Accordion.Header>
                        <Accordion.Body>
                              Show All info about this location
                        </Accordion.Body>
                  </Accordion.Item>
            </Accordion>
      );
}

export default AccordianForDoctorData;