
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { totalAppointment } from './countTotalAppointment';

function ShowTotalAppointmentsCard({timeFrame}) {
      const [totalAppointmentState , setTotalAppointmentState] = useState('');
      const totalReponseApp = async()=>{
            const countTotalApp = await totalAppointment(timeFrame);
            if(countTotalApp){
                  const jsonTotalAppointment = await countTotalApp.json();
                  console.log("JosnAppoitment: " , jsonTotalAppointment);
                  setTotalAppointmentState(jsonTotalAppointment);
            }
      }
      console.log("Toatla app in state: " , totalAppointmentState);
      useEffect(()=>{
            totalReponseApp();
      }, [timeFrame]);

  return (
    <div>
      
              {['Dark'].map((variant) => (
                    <Card
                          bg={variant.toLowerCase()}
                          key={variant}
                          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                          style={{ width: '100%', height: "9rem", left: "1rem", boxShadow: '0px 19px 38px rgba(0, 0, 0, 0.3), 0px 15px 12px rgba(0, 0, 0, 0.22)' }}
                          className="mb-2"
                    >
                          <Card.Header>Total Appointment</Card.Header>
                          <Card.Body>
                                <Card.Title> {totalAppointmentState.countAppointment} </Card.Title>
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


