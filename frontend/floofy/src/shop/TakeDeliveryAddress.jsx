import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'; 
import EnterPriceDialogue from './EnterPriceDialogue';
import SlideQuanityDialog from './SlideQuanityDialog';
import Razorpayment from '../RazorpayPayment/Razorpayment';
function TakeDeliveryAddress() {
      const { ProductId, ProductPrice } = useParams();
      
      let [DeliveryCharge , setDeleveryCharge] = useState(70)
      let [prodCount, setProdCount] = React.useState(1);


      const handleAddProduct = () => {
            prodCount += 1;
            setProdCount(prodCount);
      }
      const handleDecrementProduct = () => {
            if(prodCount===0){
                  return
            }
            prodCount -= 1;
            setProdCount(prodCount);
      }
      
      

      return (
            <div>
                  <div className="container">
                        <div className="row mt-4">
                              <div className="col-6 border-end shadow">
                                    <h3>Order Details</h3>
                              </div>
                              
                              <div className="col-4 shadow ">
                                    <h4>Price Details</h4>
                                    
                              </div>
                        </div>
                        <div className="row">
                              <div className="col-6 ">
                                    <div className="container mt-3">
                                          <h5>Delivery Address</h5>
                                    </div>
                              </div>
                              <div className="col-6 ">
                                    <div className="container mt-3 d-flex gap-5 border-bottom">
                                          <h5>Price({prodCount} item)</h5>
                                          <h5>Rs. {prodCount*ProductPrice}</h5>
                                    </div>
                              </div>
                        </div>
                        <div className="row">
                              <div className="col-6">
                                    <div className="container mt-3">
                                          <small>Home Address</small>
                                          <Form.Control size="lg" type="text" placeholder="Home Address" />
                                    </div>
                              </div>
                              <div className="col-6 ">
                                    <div className="container mt-3 d-flex gap-5 border-bottom">
                                          <h5>Delivery Charges</h5>
                                          <h5>Rs. {DeliveryCharge}</h5>
                                    </div>
                              </div>
                        </div>
                        <div className="row">
                              <div className="col-6 ">
                                    <div className="container mt-3">
                                          <small>District</small>
                                          <Form.Control size="lg" type="text" placeholder="District" />
                                    </div>
                              </div>
                              <div className="col-6 ">
                                    
                                    <div className="container mt-3 d-flex gap-5 border-bottom">
                                          <h5>Payable Amount</h5>
                                          <h5>{prodCount * ProductPrice + DeliveryCharge }</h5>
                                    </div>
                              </div>
                        </div>
                        <div className="row">
                              <div className="col-6">
                                    <div className="container mt-3">
                                          <small>PIN Code</small>
                                          <Form.Control size="lg" type="text" placeholder="PIN Code" />
                                    </div>
                              </div>
                              <div className="col-6 ">

                                    <div className="container mt-3 d-flex gap-5 border-bottom">
                                          <Razorpayment/>
                                    </div>
                              </div>
                        </div>
                        <div className="row">
                              <div className="col-6">
                                    <div className="container mt-3">
                                          <small>quantity</small>
                                          <br />
                                          <Button onClick={handleDecrementProduct} variant="warning" size="sm" className='fs-4' active>
                                                -
                                          </Button>{' '}
                                          
                                          <SlideQuanityDialog prodCount={prodCount} />
                                          <Button variant="primary" onClick={handleAddProduct} className='fs-4' size="sm" active>
                                                +
                                          </Button>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default TakeDeliveryAddress
