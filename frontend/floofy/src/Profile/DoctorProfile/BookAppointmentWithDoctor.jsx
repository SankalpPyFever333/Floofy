import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Swal from 'sweetalert2';
import Razorpayment from '../../RazorpayPayment/Razorpayment';
import RazorpaymentDoctorAppointment from './RazorpayDoctorAppointment';

function BookAppointmentWithDoctor({doctorIdCard}) {
      console.log("Doctor Id card:v" , doctorIdCard)
      const [show, setShow] = useState(false);
      const [formData, setFormData] = useState({
            User: '',
            ContactNumber: '',
            ReasonForAppointment: '',
            Doctor: doctorIdCard,
            Payment: '200',
            DateOfAppointment: '',
            TimeOfAppointment:'',
            file: null
      });

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

      const handleFileSelect = (e) => {
            const selectedFile = e.target.files[0];
            if (selectedFile) {
                  setFormData({
                        ...formData,
                        file: selectedFile
                  });
            }
      };

      const handleInputChange = (e) => {
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
      };

      const handleBookAppointment = async () => {
            try {
                  const formDataToSend = new FormData();
                  for (let key in formData) {
                        formDataToSend.append(key, formData[key]);
                  }

                  console.log("form data to send: " , formDataToSend);

                  const response = await fetch("http://localhost:3000/api/fixAppointmentWithDoctor", {
                        method: "POST",
                        body: formDataToSend
                  });

                  if (!response.ok) {
                        Swal.fire({
                              icon: "error",
                              title: "Oops...",
                              text: "Try again later!!",
                        });
                  } else {
                        Swal.fire({
                              position: "center",
                              icon: "success",
                              title: "Appointment fixed",
                              showConfirmButton: false,
                              timer: 1500
                        });
                  }
                  handleClose();
            } catch (error) {
                  console.log(error)
                  Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Server Error occurred!! Try later",
                  });
            }
      };

      return (
            <>
                  
                        <IconButton onClick={handleShow}>
                              <Button type='submit' variant="info" onClick={handleShow}>
                                    Book Appointment
                              </Button>
                        </IconButton>
                  

                  <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                              <Modal.Title>Book Appointment</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                              <Form enctype="multipart/form-data">
                                    <Form.Group className="mb-3" controlId="Product_Name">
                                          <Form.Label>Cutomer Name</Form.Label>
                                          <Form.Control
                                                type="text"
                                                autoFocus
                                                onChange={handleInputChange}
                                                name="User"
                                          />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="Product_Name">
                                          <Form.Label>WhatsApp Number</Form.Label>
                                          <Form.Control
                                                type="text"
                                                
                                                onChange={handleInputChange}
                                                name="ContactNumber"
                                          />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="Product_Name">
                                          <Form.Label>Appointment Date</Form.Label>
                                          <Form.Control
                                                type="date"
                                                onChange={handleInputChange}
                                                name="DateOfAppointment"
                                          />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="Product_Name">
                                          <Form.Label>Appointment Time</Form.Label>
                                          <Form.Control
                                                type="time"
                                                onChange={handleInputChange}
                                                name="TimeOfAppointment"
                                          />
                                    </Form.Group>
                                    
                                    <Form.Group className="mb-3" controlId="Product_Category">
                                          <Form.Label>Reason for Appointment</Form.Label>
                                          <Form.Control
                                                type="text"
                                                onChange={handleInputChange}
                                                name="ReasonForAppointment"
                                          />
                                    </Form.Group>
                                    

                                    <Form.Group className="mb-3" controlId="Product_ImagePath">
                                          <Form.Label>Pet Image</Form.Label>
                                          <Form.Control
                                                type="file"
                                                onChange={handleFileSelect}
                                                name="file"
                                          />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="Product_Category">
                                          <Form.Label>Payment(Rs.)</Form.Label>
                                          <Form.Control
                                                type="text"
                                                onChange={handleInputChange}
                                                name="Payment"
                                                value={formData.Payment}
                                                readOnly
                                          />
                                    </Form.Group>
                                    

                              </Form>
                        </Modal.Body>
                        <Modal.Footer>
                              <Button variant="secondary" onClick={handleClose}>
                                    Close
                              </Button>
                              {/* <Button type='submit' variant="primary" onClick={handleBookAppointment}>
                                    Book
                              </Button> */}

                              <RazorpaymentDoctorAppointment handleBookAppointment={handleBookAppointment} />

                              {/* on successful payment , create the appointment in the db. */}

                        </Modal.Footer>
                  </Modal>
            </>
      );
}

export default BookAppointmentWithDoctor;
