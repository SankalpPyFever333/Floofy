import React, { useState } from 'react'
import AdminSidebar from './AdminSidebar'
import MainUsersComp from './NormalUsers/MainUsersComp';
import MainProductComp from './Products/MainProductComp';
import MainOrdersComp from './Orders/MainOrdersComp';
import MainRequestComp from './ServiceRequestsMadeByUsers/MainRequestComp';
import MainDoctorsComp from './Doctors/MainDoctorsComp';
import MainRescuersComp from './Rescuers/MainRescuersComp';
import AppBarAdmin from './AppBarAdmin';
import MainOverviewComp from './OverviewOfData/MainOverviewComp';
import MainProductReviewComp from './ProductReviews/MainProductReviewComp';


function MainAdminComp() {
  const [currentItem, setCurrentItem] = useState('Users');
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-2">
            <p>render the floofy image</p>
            <AdminSidebar setCurrentItem={setCurrentItem}/>
          </div>
          <div className="col-sm-10">
            <AppBarAdmin/>
            <div style={{ flex: 1, padding: '20px' }}>
              {currentItem === 'Users' && <MainUsersComp />}
              {currentItem === 'Products' && < MainProductComp />}
              {currentItem === 'ProductsReviews' && < MainProductReviewComp />}
              {currentItem === 'Orders' && < MainOrdersComp />}
              {currentItem === 'Requests' && < MainRequestComp />}
              {currentItem === 'Doctors' && < MainDoctorsComp />}
              {/* {currentItem === 'Rescuers' && < MainRescuersComp />} */}
              {currentItem === 'Overview' && < MainOverviewComp />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainAdminComp
