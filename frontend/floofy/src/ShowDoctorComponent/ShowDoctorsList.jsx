import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import BookAppointmentWithDoctor from '../Profile/DoctorProfile/BookAppointmentWithDoctor';

function ShowDoctorsList({joinedFloofy , education , email , username , cardId }) {
      
      return (
            <Card className='shadow border-top m-2 ' >
                  <Card.Header as="h5">{username}</Card.Header>
                  <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                              Specialization: {education}
                        </Card.Text>
                        
                        <Card.Text>
                              joined Floofy: { new Date(joinedFloofy).toLocaleDateString()}
                        </Card.Text>
                        <Card.Text>
                              email: { email}
                        </Card.Text>
                        
                        <Card.Text>
                              <BookAppointmentWithDoctor  />
                              
                        </Card.Text>
                        {/* <Button variant="info">Book Appointment</Button> */}
                  </Card.Body>
            </Card>
      );
}

export default ShowDoctorsList;
