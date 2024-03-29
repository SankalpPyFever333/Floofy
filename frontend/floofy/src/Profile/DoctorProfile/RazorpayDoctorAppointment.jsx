import React, { useEffect, useState } from 'react'
import { payAppointmentFees } from './payAppointmentFees'


// import { payProductAmount } from './RazorpayProdPay'

function RazorpaymentDoctorAppointment({handleBookAppointment}) {
      const [name, setName] = useState('')
      const [email, setEmail] = useState('')
      const [mobile, setMobile] = useState('')
      const [paymentResponse, setPaymentResponse] = useState({})
      const [paymentConfirmed, setPaymnetConfirmed] = useState(false);

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
                  // order_id: paymentConfirmed.OrderResponse.id,
                  // keep this order as the charge set by doctor.
                  order_id: paymentConfirmed.OrderResponse.id,
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
                        handleBookAppointment();
                        
                  },
            };
            const rzp1 = new window.Razorpay(options);
            rzp1.open(); 
      };

      const getOrderId = async () => {
            const paymentResponseAppointment = await payAppointmentFees("200");
            console.log("Payment confirmed state response: ", paymentResponseAppointment)
            setPaymnetConfirmed(paymentResponseAppointment)
      }

      useEffect(() => {
            getOrderId();
      }, [])

      return (
            <div>

                  <form id='paymentform' onSubmit={handleSubmit}>

                        <button className='btn btn-success rounded m-2 p-2 ' >Pay Now</button>
                  </form>

                  {/* {paymentResponse &&  <p>Payment confirmed</p> } */}

            </div>
      )
}

export default RazorpaymentDoctorAppointment








