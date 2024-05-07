import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'; 
import SlideQuanityDialog from './SlideQuanityDialog';
import Razorpayment from '../RazorpayPayment/Razorpayment';

import SplashScreenForShop from './SplashScreenForShop';
function TakeDeliveryAddress() {
      const location = useLocation();
      const searchParams = new URLSearchParams(location.search);
      const { ProductId, ProductPrice } = useParams();

      const [loading, setLoading] = useState(true)
      let [DeliveryCharge , setDeleveryCharge] = useState(70)
      let [prodCount, setProdCount] = React.useState(1);
      const [district , setDistrict] = useState('');
      const [homeAddress , setHomeAdress] = useState('');
      const [pinCode , setPINcode] = useState('');
      const [isDisabled, setIsDisabled] = useState(true);
      const [customerEmail,  setCustomerEmail] = useState('');
      let [prodQuantDialog, setProdCountDialog] = useState(localStorage.getItem("prodQuantDialog"))

      localStorage.setItem("district" , district);
      localStorage.setItem("HomeAddress" , homeAddress);
      localStorage.setItem("PINCOde" , pinCode);
      // localStorage.setItem("productCount", prodQuantDialog === 0 ? prodCount : prodQuantDialog)
      localStorage.setItem("productCount", prodCount)
      localStorage.setItem("TotalPayableAmount", prodCount * ProductPrice + DeliveryCharge)
      localStorage.setItem("CustomerEmail", customerEmail)
      // localStorage.setItem("TotalPayableAmount", prodQuantDialog === 0 ? prodCount * ProductPrice + DeliveryCharge : prodQuantDialog * ProductPrice + DeliveryCharge)

      useEffect(()=>{
            checkFieldValue();

            setProdCountDialog(localStorage.getItem("prodQuantDialog"))
            const timer = setTimeout(() => {
                  setLoading(false)
            }, 1000);

            return ()=>{
                  clearTimeout(timer);
            }


      }, [district , pinCode , homeAddress , prodQuantDialog , customerEmail])

      const handleAddProduct = () => {
            prodCount += 1;
            setProdCount(prodCount);
      }

      const handleDecrementProduct = () => {
            
            if(prodCount===1){
                  return
            }
            prodCount -= 1;
            setProdCount(prodCount);
            
      }
      
      const checkFieldValue = ()=>{
            if(pinCode.length ===6   && homeAddress.length>0 && district.length>0 && customerEmail.length>0 ){
                  setIsDisabled(false)
            }
            else{
                  setIsDisabled(true)
            }
      }

      const handleEmailChange = ()=>(e)=>{
            const email = e.target.value;
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (emailRegex.test(email)) {
                  // Valid email format
                  setCustomerEmail(email);
            } else {
                  // Invalid email format
                  setCustomerEmail('');
            }
      }

      if(loading){
            return <SplashScreenForShop/>
      }

      return (
            <div>
                  <div className="container">
                        <div className="row mt-4">
                              <div className="col-6 border-end shadow">
                                    <h3>Order Details</h3>
                              </div>
                              <div className="col-4 shadow">
                                    <h4>Price Details</h4>
                              </div>
                        </div>
                        <div className="row">
                              <div className="col-6 border-end">
                                    <div className="container mt-3">
                                          <h5>Delivery Address</h5>
                                    </div>
                              </div>
                              <div className="col-6">
                                    <div className="container mt-3 d-flex justify-content-between border-bottom">
                                          <h5>Price({prodCount} item)</h5>
                                          <h5>Rs. {Math.floor(prodCount * ProductPrice)}</h5>
                                    </div>
                              </div>
                        </div>
                        <div className="row">
                              <div className="col-6 border-end">
                                    <div className="container mt-3">
                                          <small>Home Address</small>
                                          <Form.Control
                                                size="lg"
                                                type="text"
                                                onChange={(e) => setHomeAdress(e.target.value)}
                                                placeholder="Home Address"
                                          />
                                    </div>
                              </div>
                              <div className="col-6">
                                    <div className="container mt-3 d-flex justify-content-between border-bottom">
                                          <h5>Delivery Charges</h5>
                                          <h5>Rs. {DeliveryCharge}</h5>
                                    </div>
                              </div>
                        </div>
                        <div className="row">
                              <div className="col-6 border-end">
                                    <div className="container mt-3">
                                          <small>District</small>
                                          <Form.Control
                                                size="lg"
                                                type="text"
                                                placeholder="District"
                                                onChange={(e) => setDistrict(e.target.value)}
                                          />
                                    </div>
                              </div>
                              <div className="col-6">
                                    <div className="container mt-3 d-flex justify-content-between border-bottom">
                                          <h5>Payable Amount</h5>
                                          <h5>{Math.floor(prodCount * ProductPrice + DeliveryCharge)}</h5>
                                    </div>
                              </div>
                        </div>
                        <div className="row">
                              <div className="col-6 border-end">
                                    <div className="container mt-3">
                                          <small>PIN Code</small>
                                          <Form.Control
                                                size="lg"
                                                type="text"
                                                pattern="[0-9]{6}"
                                                maxLength={6}
                                                placeholder="PIN Code"
                                                onChange={(e) => setPINcode(e.target.value)}
                                          />
                                    </div>
                              </div>
                              <div className="col-6">
                                    <div className="container mt-3 d-flex justify-content-between border-bottom">
                                          <Razorpayment disabledState={isDisabled} />
                                    </div>
                              </div>
                        </div>
                        <div className="row">
                              <div className="col-6 border-end ">
                                    <div className="container mt-3">
                                          <small>Email</small>
                                          <Form.Control
                                                size="lg"
                                                type="text"
                                                value={customerEmail}
                                                placeholder="Email"
                                                onChange={(e) => {
                                                      setCustomerEmail(e.target.value);
                                                      handleEmailChange(e);
                                                }}
                                          />
                                    </div>
                              </div>
                        </div>
                        <div className="row">
                              <div className="col-6">
                                    <div className="container mt-3">
                                          <small>quantity</small>
                                          <br />
                                          <Button
                                                onClick={handleDecrementProduct}
                                                variant="warning"
                                                size="sm"
                                                className="fs-4"
                                                active
                                          >
                                                -
                                          </Button>{" "}
                                          <SlideQuanityDialog prodCount={prodCount} />
                                          <Button
                                                variant="primary"
                                                onClick={handleAddProduct}
                                                className="fs-4"
                                                size="sm"
                                                active
                                          >
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
