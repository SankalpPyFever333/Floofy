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
// import Razorpayment from './RazorpayPayment/Razorpayment';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<SignupComponent />} /> */}
          <Route path="/" element={<LoginComponent />} />
          <Route path="/MainApp" element={<MainApp />} />
          <Route path="/GoToCart" element={<Cart />} />
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
        </Routes>
      </BrowserRouter>
      {/* <Razorpayment/> */}
    </div>
  );
}

export default App;
