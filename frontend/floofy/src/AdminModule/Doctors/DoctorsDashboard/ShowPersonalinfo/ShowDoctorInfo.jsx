
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import AccordianForDoctorData from './AccordianForDoctorData';

function ShowDoctorInfo({DoctorDetailsProp}) {
      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

      return (
            <>
                  <Button variant="primary" onClick={handleShow}>
                        See more
                  </Button>

                  <Offcanvas show={show} placement='end' onHide={handleClose}>
                        <Offcanvas.Header closeButton>
                              <Offcanvas.Title>Doctor's Information</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                              
                              <AccordianForDoctorData DoctorInfoData={DoctorDetailsProp}  />
                        </Offcanvas.Body>
                  </Offcanvas>
            </>
      );
}

export default ShowDoctorInfo;


// When a doctor clicks on edit profile , instead of opening a modal for taking the data , redirect him to a new page where you will take location along with other details and save that data in the db.


