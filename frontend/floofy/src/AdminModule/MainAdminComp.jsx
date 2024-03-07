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
import MainInventoryManager from '../InventoryManagement/MainInventoryManager';
import { useNavigate } from 'react-router-dom';

function MainAdminComp() {
  const [currentItem, setCurrentItem] = useState('Users');
  const navigate = useNavigate();
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-2 border-end ">
            
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
              {currentItem === "ProductInventory" && navigate("/InventoryManagment")}
              {currentItem === 'Overview' && < MainOverviewComp />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainAdminComp
