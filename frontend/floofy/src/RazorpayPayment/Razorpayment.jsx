import React, { useEffect, useState } from 'react'
import { payProductAmount } from './RazorpayProdPay'
import { createProductOrder } from './createOrderOnSuccessPayment'

function Razorpayment({disabledState}) {
      const [name, setName] = useState('')
      const [email, setEmail] = useState('')
      const [mobile, setMobile] = useState('')
      const [paymentResponse , setPaymentResponse] = useState({})
      const [paymentConfirmed , setPaymnetConfirmed] = useState(false);

      const handleSubmit = async (event) => {
            event.preventDefault();

            const options = {
                  key: 'rzp_test_2Q30fucOuJvMqJ',
                  // key: 'rzp_live_HGCsLV5PjSYo8F' , 
                  amount: '5000000',
                  currency: 'INR',
                  name: 'DigiCoders Technologies',
                  description: 'Fees Payment',
                  image: '',
                  order_id: paymentConfirmed.OrderResponse.id,
                  // order_id: 'order_NUOPJGtB4Omtqz',
                  callback_url: '',
                  prefill: {
                        name: name,
                        email: email,
                        contact: mobile,
                  },
                  notes: {
                        address: '22-23, IT Chauraha, Lucknow',
                  },
                  theme: {
                        color: '#3399cc',
                  },
                  handler: function (response) {
                        console.log('Payment ID = ' + response.razorpay_payment_id);
                        console.log('Order ID = ' + response.razorpay_order_id);
                        console.log('payment Success');
                        setPaymentResponse(response);
                        const IsOrderCreated = createProductOrder();
                        if(IsOrderCreated){
                              Swal.fire({
                                    position: "center",
                                    icon: "success",
                                    title: "Order Placed",
                                    showConfirmButton: false,
                                    timer: 1500
                              });
                        }else{
                              Swal.fire({
                                    icon: "error",
                                    title: "Oops...",
                                    text: "Try again later!!",
                              });
                        }
                  },
                  
            };

            const rzp1 = new window.Razorpay(options);
            rzp1.open();

            rzp1.on("payment.error", function (error){
                alert( "Payment failed" );
                console.log(error);
            });
      };

      const getOrderId = async ()=>{
            const paymentResponseProduct = await payProductAmount(localStorage.getItem("TotalPayableAmount"));
            console.log("Payment confirmed state response: ", paymentResponseProduct)
            setPaymnetConfirmed(paymentResponseProduct)
      }

      useEffect(()=>{
            getOrderId();
      }, [localStorage.getItem("TotalPayableAmount")])

      return (
            <div>
                  
                  <form id='paymentform' onSubmit={handleSubmit}>
                        
                        <button disabled = {disabledState} className='btn btn-success rounded m-2 p-2 ' >Pay Now</button>
                  </form>

                  {/* {paymentResponse &&  <p>Payment confirmed</p> } */}

            </div>
      )
}

export default Razorpayment




