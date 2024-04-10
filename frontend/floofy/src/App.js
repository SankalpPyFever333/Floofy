import './App.css';
import React from 'react';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import MainApp from './components/MainApp';
import Cart from './CartComponent/Cart';
import LoginComponent from './AutherizationModule/LoginComponent';
import ForgotPassword from './AutherizationModule/ForgotPassword';
import VerifyOtpComp from './AutherizationModule/VerifyOtpComp';
import MainAdminComp from './AdminModule/MainAdminComp';
import MainDoctorDashBoradComp from './AdminModule/Doctors/DoctorsDashboard/MainDoctorDashBoradComp';
import MainRescuerDashboard from './AdminModule/Rescuers/RescuerDashboard/MainRescuerDashboard';
import DoctorProfileUpdate from './Profile/DoctorProfile/DoctorProfileUpdate';
import CreatePost from './Profile/CreatePost';
import MainInventoryManager from './InventoryManagement/MainInventoryManager';
import ProductPageDetails from './shop/ProductPageDetails';
import TakeDeliveryAddress from './shop/TakeDeliveryAddress';

import Razorpayment from './RazorpayPayment/Razorpayment';
import BookAppointmentWithDoctor from './Profile/DoctorProfile/BookAppointmentWithDoctor';
import MainShopComp from './shop/MainShopComp';
import MainViewYourOrder from './shop/ViewYourOrders/MainViewYourOrder';
import MyMainOrderAllComp from './shop/ViewYourOrders/MyMainOrderAllComp';
import OrderEditingComp from './shop/OrderEditingComp';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<SignupComponent />} /> */}

          <Route path="/" element={<LoginComponent />} />
          <Route path="/MainApp" element={<MainApp />} />
          <Route path="/GoToCart" element={<Cart />} />
          <Route path="/MoveToshopByCarousel" element={<MainShopComp />} />
          <Route path="/GotoForgotPassword" element={<ForgotPassword />} />
          <Route path="/GotoVerifyOtp" element={<VerifyOtpComp />} />
          <Route path="/LoginPage" element={<LoginComponent />} />
          <Route path="/MainAdminComponent" element={<MainAdminComp />} />
          <Route
            path="/DoctorsDashboard/:id"
            element={<MainDoctorDashBoradComp />}
          />
          <Route
            path="/RescuersDashboard/:id"
            element={<MainRescuerDashboard />}
          />

          <Route path="/LoginAfterLogOut" element={<LoginComponent />} />
          {/* <Route path="/logoutFromuserEnd" element={<LoginComponent />} /> */}
          <Route
            path="/doctorprofileedit/:id"
            element={<DoctorProfileUpdate />}
          />
          <Route path="/createpost" element={<CreatePost />} />
          <Route
            path="/InventoryManagment"
            element={<MainInventoryManager />}
          />
          <Route path="/MoveToAdminPanel" element={<MainAdminComp />} />
          <Route
            path="/productDetailsPage/:ProductId"
            element={<ProductPageDetails />}
          />
          <Route
            path="/GotoDeliveryPage/:ProductId/:ProductPrice"
            element={<TakeDeliveryAddress />}
          />
          <Route path="/GotoEditOrder" element={<OrderEditingComp />} />
          <Route
            path="/viewYourOrders/:userId"
            element={<MyMainOrderAllComp />}
          />

          {/* <Route path="/bookappointment/:UserID" element={<BookAppointmentWithDoctor />} /> */}
        </Routes>
      </BrowserRouter>
      {/* <Razorpayment/> */}
    </div>
  );
}

export default App;
