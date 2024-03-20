import React from 'react'
import ShowOrdersOnProducts from './ShowOrdersOnProduct'

function MainOrdersComp() {
  return (
    <div>
      <h3>Orders</h3>
      <ShowOrdersOnProducts/>
    </div>
  )
}

export default MainOrdersComp

// 1. After making the payments, create order in the database. Show that order to user with all the functionality(like order tracking , cancel order etc.) and also make a page that particular user can view all he had ordered

