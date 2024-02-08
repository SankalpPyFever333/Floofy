import React, { useState } from 'react'

function Razorpayment() {
      const [name, setName] = useState('')
      const [email, setEmail] = useState('')
      const [mobile, setMobile] = useState('')

      const handleSubmit = (event) => {
            event.preventDefault();

            const options = {
                  key: 'rzp_live_HGCsLV5PjSYo8F',
                  amount: '10000',
                  currency: 'INR',
                  name: 'DigiCoders Technologies',
                  description: 'Fees Payment',
                  image: '',
                  order_id: 'order_NUOPJGtB4Omtqz',
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
                  },
            };

            const rzp1 = new window.Razorpay(options);
            rzp1.open();
      };

      return (
            <div>
                  <h1>RazorPay Payment Gateway</h1>
                  <form id='paymentform' onSubmit={handleSubmit}>
                        <input style={{ margin: "20px" }} type="text" placeholder='Name' onChange={(e) => {
                              setName(e.target.value)
                        }} />
                        <br />
                        <input style={{ margin: "20px" }} type="text" placeholder='Email' onChange={(e) => {
                              setEmail(e.target.value)
                        }} />
                        <br />
                        <input style={{ margin: "20px" }} type="text" placeholder='Phone' onChange={(e) => {
                              setMobile(e.target.value)
                        }} />
                        <br />
                        <button type='submit' style={{ margin: "20px" }}>Pay now</button>
                  </form>
            </div>
      )
}

export default Razorpayment



