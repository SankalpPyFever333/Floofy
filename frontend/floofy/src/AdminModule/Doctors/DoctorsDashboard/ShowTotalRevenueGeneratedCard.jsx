import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { totalRevenueDoctor } from './calTotalRevenue';

function ShowTotalRevenueGeneratedCard({timeFrame}) {
      const[totalAmt, setTotalAmt] = useState(0);
      const getTotalRev = async()=>{
            const totalRev = await totalRevenueDoctor(timeFrame);
            const jsonTotalRev = await  totalRev.json();
            setTotalAmt(jsonTotalRev);
      }

      useEffect(()=>{
            getTotalRev();
      }, [timeFrame]);

      console.log("Total amt in state: " , totalAmt);
      console.log("messgae is :" , totalAmt.message);
      // console.log("totla rev is :", totalAmt.totalRev[0].totalPaymentAmount);

      const totalRevenueGenerated = totalAmt && totalAmt.totalRev && totalAmt.totalRev[0] ? totalAmt.totalRev[0].totalPaymentAmount : 0

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
                          <Card.Header>Total Revenue</Card.Header>
                          <Card.Body>
                                <Card.Title> {totalRevenueGenerated} </Card.Title>
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
