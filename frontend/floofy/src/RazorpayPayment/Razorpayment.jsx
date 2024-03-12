import React, { useEffect, useState } from 'react'
import { payProductAmount } from './RazorpayProdPay'

function Razorpayment() {
      const [name, setName] = useState('')
      const [email, setEmail] = useState('')
      const [mobile, setMobile] = useState('')
      const [paymentResponse , setPaymentResponse] = useState({})
      const [paymentConfirmed , setPaymnetConfirmed] = useState(false);

      const handleSubmit = (event) => {
            event.preventDefault();

            const options = {
                  key: 'rzp_test_2Q30fucOuJvMqJ',
                  // key: 'rzp_live_HGCsLV5PjSYo8F' , 
                  amount: '5000000',
                  currency: 'INR',
                  name: 'DigiCoders Technologies',
                  description: 'Fees Payment',
                  image: '',
                  order_id: 'order_NkypXu1sCUc4qc',
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
                  },
                  // response 
                  // response : response 

                  

            };

            const rzp1 = new window.Razorpay(options);
            rzp1.open();




      };

      useEffect(()=>{
            payProductAmount();
      })


      return (
            <div>
                  
                  <form id='paymentform' onSubmit={handleSubmit}>
                        
                        <button className='btn btn-success rounded m-2 p-2 ' >Pay Now</button>
                  </form>

                  {paymentConfirmed &&  <p>Payment confirmed</p> }

            </div>
      )
}

export default Razorpayment



