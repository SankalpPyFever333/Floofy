import Card from 'react-bootstrap/Card';
import React, { useEffect ,useState } from 'react'
import DropdownToSelectTime from './DropdownToSelectTime';
import fetchAllDataFromDb from './FetchAllDataFromDb';
import PieChartData from './PieChartData';


function CardData() {
      const [selectedTimeFrame, setSelectedTimeFrame] = useState('Last Week');
      const [purchasesData, setPurchasesData] = useState(null);
      const [revenueData, setRevenueData] = useState(null);
      const [activeUsersData, setActiveUsersData] = useState(null);


      useEffect(()=>{
            fetchDataActiveUsersData(selectedTimeFrame)
      },[selectedTimeFrame]);

      const fetchDataActiveUsersData = async (timeFrame) => {
            try {
                  const datafetchedFromDb = await fetchAllDataFromDb(timeFrame)
                  console.log(`Active users data in frontend ${datafetchedFromDb.ActiveUserSData.userCount}`)
                  setActiveUsersData(datafetchedFromDb.ActiveUserSData.userCount)

                  console.log(`purchase data in fromtend: ${datafetchedFromDb.purchaseData.productCount}`)
                  setPurchasesData(datafetchedFromDb.purchaseData.productCount)

                  console.log(`Total Revenue is: ${datafetchedFromDb.revenueData.revenue}`)
                  setRevenueData(datafetchedFromDb.revenueData.revenue)

            } catch (error) {
                  console.log("error in fetching data  ", error)
            }
      }


      return (
            <>
                  <div style={{margin:"20px"}} >
                        <DropdownToSelectTime selectedTimeFrame={selectedTimeFrame} setSelectedTimeFrame={setSelectedTimeFrame} />
                  </div>

                  <div className="row">
                        <div className="col-sm-4">
                              {['Dark'].map((variant) => (
                                    <Card
                                          bg={variant.toLowerCase()}
                                          key={variant}
                                          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                                          style={{ width: '18rem' }}
                                          className="mb-2"
                                    >
                                          <Card.Header>Purchases</Card.Header>
                                          <Card.Body>
                                                <Card.Title> {purchasesData} </Card.Title>
                                                {/* <Card.Text>
                                          Show %age inc or dcr
                                    </Card.Text> */}
                                          </Card.Body>
                                    </Card>
                              ))}
                              {['Dark'].map((variant) => (
                                    <Card
                                          bg={variant.toLowerCase()}
                                          key={variant}
                                          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                                          style={{ width: '18rem' }}
                                          className="mb-2"
                                    >
                                          <Card.Header>Revenue Generated</Card.Header>
                                          <Card.Body>
                                                <Card.Title> {revenueData} </Card.Title>
                                                {/* <Card.Text>
                                          Show %age inc or dcr
                                    </Card.Text> */}
                                          </Card.Body>
                                    </Card>
                              ))}
                              {['Dark'].map((variant) => (
                                    <Card
                                          bg={variant.toLowerCase()}
                                          key={variant}
                                          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                                          style={{ width: '18rem' }}
                                          className="mb-2"
                                    >
                                          <Card.Header>Active users</Card.Header>
                                          <Card.Body>
                                                <Card.Title> {activeUsersData} </Card.Title>
                                                {/* <Card.Text>
                                          <span  > %age inc in user </span>
                                    </Card.Text> */}
                                          </Card.Body>
                                    </Card>
                              ))}
                        </div>

                        <div className="col-sm-6">
                              <PieChartData countActiveUsers={activeUsersData} ProductSalesCount={purchasesData} TotalRevenue={revenueData} />
                        </div>

                  </div>
                  
            </>
      );
}

export default CardData;
