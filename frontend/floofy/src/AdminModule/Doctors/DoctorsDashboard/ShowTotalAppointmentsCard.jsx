
import React from 'react'
import Card from 'react-bootstrap/Card';

function ShowTotalAppointmentsCard() {
  return (
    <div>
      
              {['Dark'].map((variant) => (
                    <Card
                          bg={variant.toLowerCase()}
                          key={variant}
                          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                          style={{ width: '50%', height: "9rem", margin: "1.6rem", left: "4rem", boxShadow: '0px 19px 38px rgba(0, 0, 0, 0.3), 0px 15px 12px rgba(0, 0, 0, 0.22)' }}
                          className="mb-2"
                    >
                          <Card.Header>Total Appointment</Card.Header>
                          <Card.Body>
                                <Card.Title> 3 </Card.Title>
                                {/* <Card.Text>
                                          Show %age inc or dcr
                                    </Card.Text> */}
                          </Card.Body>
                    </Card>
              ))}

    </div>
  )
}

export default ShowTotalAppointmentsCard


