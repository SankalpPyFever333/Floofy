import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import BookAppointmentWithDoctor from '../Profile/DoctorProfile/BookAppointmentWithDoctor';
import DoctorRating from './DoctorRating';

function ShowDoctorsList({joinedFloofy ,  email , username , doctorId }) {
      console.log("Doctor id in the list is : " , doctorId);

      return (
            <Card className='shadow border-top m-2 ' >
                  <Card.Header as="h5">{username}</Card.Header>
                  <Card.Body>
                        <Card.Title></Card.Title>
                        {/* <Card.Text>
                              Specialization: {education}
                        </Card.Text> */}
                        <Card.Text>
                              joined Floofy: { new Date(joinedFloofy).toLocaleDateString()}
                        </Card.Text>
                        <Card.Text>
                              email: { email}
                        </Card.Text>
                        <Card.Text>
                              <BookAppointmentWithDoctor doctorIdCard={doctorId} />
                              <DoctorRating doctorIdToRate={doctorId} />
                        </Card.Text>
                        {/* <Button variant="info">Book Appointment</Button> */}
                  </Card.Body>
            </Card>
      );
}

export default ShowDoctorsList;
