import './App.css';
import React from 'react';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import MainApp from './components/MainApp';
import Cart from './CartComponent/Cart';
import LoginComponent from './AutherizationModule/LoginComponent';
import ForgotPassword from './AutherizationModule/ForgotPassword';
import VerifyOtpComp from './AutherizationModule/VerifyOtpComp';
import MainAdminComp from './AdminModule/MainAdminComp';


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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
