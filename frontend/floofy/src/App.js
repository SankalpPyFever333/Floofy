
import './App.css';
import ShowCommonForm from './AutherizationModule/ShowCommonForm';
import SignupComponent from './AutherizationModule/SignupComponent';
import MainProfileComponent from './Profile/MainProfileComponent';
import ProfileWithBUtton from './Profile/ProfileWithBUtton';
import TabOfPostVideo from './Profile/TabOfPostVideo';
import React from 'react';
import App_Bar from './components/App_Bar';
import BottomNavBar from './components/BottomNavBar';
import HomePageContent from './components/HomePageContent';
import LeftDrawer from './components/LeftDrawer';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import MainApp from './components/MainApp';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path='/' element= {<SignupComponent/>} />
          <Route path='/MainApp' element={<MainApp/>} />

        </Routes>
      </BrowserRouter>
      
      
      
    </div>
  );
}

export default App;
