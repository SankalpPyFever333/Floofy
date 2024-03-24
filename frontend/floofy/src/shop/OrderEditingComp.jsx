import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import EnterPriceDialogue from './EnterPriceDialogue';
import SlideQuanityDialog from './SlideQuanityDialog';
import Razorpayment from '../RazorpayPayment/Razorpayment';
import { fetchOrderForEdit } from './fetchOrderForEditing';
import SplashScreenForShop from './SplashScreenForShop';
function OrderEditingComp() {
      const location = useLocation();
      const searchParams = new URLSearchParams(location.search);
      const { ProductId, ProductPrice } = useParams();
      const districtParam = searchParams.get("districtParam")
      const homeAddressParam = searchParams.get("homeAddressParam")
      const PINcodeparam = searchParams.get("pinCodeParam")
      const rowIdParam = searchParams.get("rowid");
      const [pincodeParamState, setPincodeParamState] = useState(PINcodeparam || '')
      const [homeAddressParamState, setHomeArrParam] = useState(homeAddressParam || '')
      const [districtParamState, setDistrictParamState] = useState(districtParam || '')

      const [loading, setLoading] = useState(true)

      // console.log("All parameters are: " , districtParam)
      // Write the method foe fetching info for the rowId, and display conditionally those values.

      let [DeliveryCharge, setDeleveryCharge] = useState(70)
      let [prodCount, setProdCount] = React.useState(1);
      const [district, setDistrict] = useState('');
      const [homeAddress, setHomeAdress] = useState('');
      const [pinCode, setPINcode] = useState('');
      const [isDisabled, setIsDisabled] = useState(true);
      const [payableAmount, setPayableAmount] = useState('');
      const [productOrderIdResponse, setProductOrderIdResponse] = useState('');

      const [showPayButton, setShowPayButton] = useState(false);
      const [qProdEditValue, setQProdEditValue] = useState('');

      const [QuantProdPrice, setQuantProdPrice] = useState({})

      localStorage.setItem("district", district);
      localStorage.setItem("HomeAddress", homeAddress);
      localStorage.setItem("PINCOde", pinCode);
      localStorage.setItem("productCount", prodCount)
      localStorage.setItem("TotalPayableAmount", prodCount * ProductPrice + DeliveryCharge)


      // write a js method for fetching order and take quantity and productprice from it and show that calculation.


      const fetchOrderWithId = async (orderId) => {
            const orderResponse = await fetchOrderForEdit(orderId)
            if (orderResponse) {
                  const jsonResponseOrder = await orderResponse.json();
                  setProductOrderIdResponse(jsonResponseOrder.OrderDetails);
                  console.log("Order for editing", jsonResponseOrder);
                  return jsonResponseOrder.OrderDetails;
            }
            else {
                  console.log("Some error occured in fetchOrderiD method");
                  return null;
            }
      }

      const getQuantityAndProdPrice = () => {
            console.log("productOrderIdResponse in the get : ", productOrderIdResponse.Products[0].quantity)
            return {
                  ProdQuantityEdit: productOrderIdResponse.Products[0].quantity,
                  ProdPriceWdit: productOrderIdResponse.Products[0].product.Price
            }
      }

      useEffect(() => {
            checkFieldValue();
            const orderDetails = async () => {
                  const orderDetailRowId = await fetchOrderWithId(rowIdParam);
                  console.log("orderDetails in the useeffect: ", orderDetailRowId);
                  setProductOrderIdResponse(orderDetailRowId)
                  // console.log("Product order ID response useeffect: " , productOrderIdResponse.Products);
                  if (orderDetailRowId) {
                        const quantityAndPrice = getQuantityAndProdPrice();
                        setQProdEditValue(quantityAndPrice.ProdQuantityEdit);
                        setQuantProdPrice(quantityAndPrice);
                  }
            }
            orderDetails();

            const timer = setTimeout(() => {
                  setLoading(false)
            }, 4000);

            return () => {
                  clearTimeout(timer);
            }

      }, [district, pinCode, homeAddress])


      // console.log("Products order is : ", productOrderIdResponse.deliveryAddress)
      // console.log("Products : ", productOrderIdResponse.Products[0].product.Price)




      const handleAddProduct = () => {
            if (QuantProdPrice.ProdQuantityEdit) {
                  QuantProdPrice.ProdQuantityEdit = (parseInt(QuantProdPrice.ProdQuantityEdit) + 1).toString();
                  console.log("quantity is: ", QuantProdPrice);
                  setQProdEditValue(QuantProdPrice.ProdQuantityEdit)
                  return
            }
            setShowPayButton(true);
            prodCount += 1;
            setProdCount(prodCount);
      }
      // prodCount is not working properly, do it later on.

      const handleDecrementProduct = () => {
            if (QuantProdPrice.ProdQuantityEdit) {
                  if (QuantProdPrice.ProdQuantityEdit <= 1) {
                        // console.log("Inside the if")
                        setQProdEditValue(QuantProdPrice.ProdQuantityEdit)
                        return
                  }
                  QuantProdPrice.ProdQuantityEdit = (parseInt(QuantProdPrice.ProdQuantityEdit) - 1).toString();
                  console.log("quantity is: ", QuantProdPrice);
                  setQProdEditValue(QuantProdPrice.ProdQuantityEdit)
                  setShowPayButton(true);
                  return
            }
            if (prodCount === 1) {
                  return
            }
            prodCount -= 1;
            setProdCount(prodCount);
            setShowPayButton(true)
      }

      const checkFieldValue = () => {
            if ((pinCode.length === 6 && homeAddress.length > 0 && district.length > 0) || (pincodeParamState.length === 6 && homeAddressParamState.length > 0 && districtParamState.length > 0)) {
                  setIsDisabled(false)
            }
            else {
                  setIsDisabled(true)
            }
      }

      const handleUpdateProductOrder = () => {
            // call method for updating the order.

      }


      if (loading) {
            return <SplashScreenForShop />
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
                                          <h5>Price({qProdEditValue || prodCount} item)</h5>
                                          <h5>Rs. {((qProdEditValue || prodCount) * ProductPrice) || ((qProdEditValue || prodCount) * QuantProdPrice.ProdPriceWdit)}</h5>
                                    </div>
                              </div>
                        </div>
                        <div className="row">
                              <div className="col-6">
                                    <div className="container mt-3">
                                          <small>Home Address</small>
                                          <Form.Control size="lg" type="text" value={homeAddressParamState || ''} onChange={(e) => {
                                                setHomeAdress(e.target.value)
                                                setHomeArrParam(e.target.value)
                                          }} placeholder="Home Address" />
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
                                          <Form.Control size="lg" type="text" value={districtParamState || ''} placeholder="District" onChange={(e) => {
                                                setDistrict(e.target.value)
                                                setDistrictParamState(e.target.value)
                                          }} />
                                    </div>
                              </div>
                              <div className="col-6 ">

                                    <div className="container mt-3 d-flex gap-5 border-bottom">
                                          <h5>Payable Amount</h5>
                                          <h5>{Math.floor((((qProdEditValue || prodCount) * QuantProdPrice.ProdPriceWdit) + DeliveryCharge)) || Math.floor(productOrderIdResponse.totalAmount)}</h5>
                                    </div>
                              </div>
                        </div>
                        <div className="row">
                              <div className="col-6">
                                    <div className="container mt-3">
                                          <small>PIN Code</small>
                                          <Form.Control size="lg" type="text"
                                                pattern='[0-9]{6}'
                                                maxLength={6}
                                                value={pincodeParamState || ''}
                                                placeholder="PIN Code" onChange={(e) => {
                                                      setPINcode(e.target.value)
                                                      setPincodeParamState(e.target.value)
                                                }} />

                                    </div>
                              </div>
                              <div className="col-6 ">

                                    <div className="container mt-3 d-flex gap-5 border-bottom">
                                          {
                                                showPayButton ? <Razorpayment disabledState={isDisabled} /> : <Button variant="primary" onClick={() => {
                                                      handleUpdateProductOrder()
                                                }} >Update</Button>
                                          }


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

                                          <SlideQuanityDialog prodCount={prodCount} prodQuantityEdit={qProdEditValue} />
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

// So, now you have to give the button to update order and make payment(when he update quanity).


export default OrderEditingComp
