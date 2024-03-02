import React from 'react'
import SidebarChatonHome from './ChatComponent/SidebarChatonHome'
import MainFeedComp from './FeedComponent/MainFeedComp'
import MainDisplayUserContent from '../Profile/DisplaySpecificUserContent/MainDisplayUserContent'
import bgImage from "../Assets/bgImage.jpg"

function MainHomeComp() {
  return (
        <div className='container-fluid bg-light-subtle '>
      <div className="row">
            <div className="col-sm-4">
                  {/* <h4>offers on shop and vet</h4>
                  <h4>offers on shop and vet</h4>
                  <h4>offers on shop and vet</h4> */}
                  
            </div>

            <div className="col-sm-4">
                  
                  {/* <MainFeedComp/> */}
                  <MainDisplayUserContent/>
            </div>

            <div className="col-sm-4">
                  {/* <SidebarChatonHome/> */}
            </div>
      </div>
      
    </div>

      

  )
}

export default MainHomeComp



