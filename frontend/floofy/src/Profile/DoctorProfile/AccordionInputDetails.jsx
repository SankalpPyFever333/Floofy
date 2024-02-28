
import Accordion from 'react-bootstrap/Accordion';
import TextField from '@mui/material/TextField';

import BasicDateRangePicker from './DateRangePicker';


function AccordionInputDetails() {
      return (
            <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0" style={{margin:"12px"}} >
                        <Accordion.Header>Experience</Accordion.Header>
                        <Accordion.Body>
                              <TextField id="filled-basic"  label="Name" variant="filled" />
                              
                              <BasicDateRangePicker/>
                              
                              <TextField id="filled-basic"  label="Description" variant="filled" />
                        </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" style={{ margin: "12px" }} >
                        <Accordion.Header>Location</Accordion.Header>
                        <Accordion.Body>
                              <TextField id="filled-basic" label="Address" variant="filled" />
                              
                        </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2" style={{ margin: "12px" }} >
                        <Accordion.Header>Specialization</Accordion.Header>
                        <Accordion.Body>
                              <TextField style={{ margin: "12px" }} id="filled-basic" label="Any additional Trainig" variant="filled" />
                              <br />
                              <TextField id="filled-basic" label="Area of specialization" variant="filled" />
                        </Accordion.Body>
                  </Accordion.Item>
            </Accordion>
      );
}

export default AccordionInputDetails;



