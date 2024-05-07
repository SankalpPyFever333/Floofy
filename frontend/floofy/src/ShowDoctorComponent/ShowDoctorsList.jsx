
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import BookAppointmentWithDoctor from '../Profile/DoctorProfile/BookAppointmentWithDoctor';
import DoctorRating from './DoctorRating';

function ShowDoctorsList({ joinedFloofy, LicenseNumber, LocationOfDoctor, additionalTraining, email, username, doctorId }) {
      return (
            <Card className='shadow border-primary rounded m-3'>
                  <Card.Header as="h5" className="bg-primary text-white">{username}</Card.Header>
                  <Card.Body>
                        <Card.Text className="font-weight-bold">
                              Joined Floofy: {new Date(joinedFloofy).toLocaleDateString()}
                        </Card.Text>
                        <Card.Text className="font-weight-bold">
                              License Number: {LicenseNumber}
                        </Card.Text>
                        <Card.Text className="font-weight-bold">
                              Location: {LocationOfDoctor}
                        </Card.Text>
                        <Card.Text className="font-weight-bold">
                              Experience: {additionalTraining}
                        </Card.Text>
                        <Card.Text className="font-weight-bold">
                              Email: {email}
                        </Card.Text>
                        <div className="d-flex justify-content-between">
                              <BookAppointmentWithDoctor doctorIdCard={doctorId} />
                              <DoctorRating doctorIdToRate={doctorId} />
                        </div>
                  </Card.Body>
            </Card>
      );
}

export default ShowDoctorsList;

