
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import AccordianForDoctorData from './AccordianForDoctorData';

function ShowDoctorInfo() {
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
                              <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                              Here, show all the info of experience , specialzation , location etc.
                              <AccordianForDoctorData/>
                        </Offcanvas.Body>
                  </Offcanvas>
            </>
      );
}

export default ShowDoctorInfo;


// When a doctor clicks on edit profile , instead of opening a modal for taking the data , redirect him to a new page where you will take location along with other details and save that data in the db.


// Google map api key:  AIzaSyBTexd17ouoOy_yknLxlD8w7jvNChnyqXk

