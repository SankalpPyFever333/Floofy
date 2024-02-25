import React from 'react'
import Card from 'react-bootstrap/Card';
function ShowTotalRevenueGeneratedCard({timeFrame}) {
  return (
    <div>
              {['Dark'].map((variant) => (
                    <Card
                          bg={variant.toLowerCase()}
                          key={variant}
                          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                          style={{ width: '100%', height: "9rem", margin: ".3rem", left: "4rem", boxShadow: '0px 19px 38px rgba(0, 0, 0, 0.3), 0px 15px 12px rgba(0, 0, 0, 0.22)' }}
                          className="mb-2"
                    >
                          <Card.Header>Total Revenue</Card.Header>
                          <Card.Body>
                                <Card.Title> 1200 </Card.Title>
                                {/* <Card.Text>
                                          Show %age inc or dcr
                                    </Card.Text> */}
                          </Card.Body>
                    </Card>
              ))}
    </div>
  )
}

export default ShowTotalRevenueGeneratedCard
