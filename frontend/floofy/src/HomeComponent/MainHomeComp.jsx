import React from 'react'
import SidebarChatonHome from './ChatComponent/SidebarChatonHome'
import MainFeedComp from './FeedComponent/MainFeedComp'
import MainDisplayUserContent from '../Profile/DisplaySpecificUserContent/MainDisplayUserContent'

function MainHomeComp() {
  return (
    <div className='container-fluid'>
      <div className="row">
            <div className="col-sm-3">
                  <h4>offers on shop and vet</h4>
                  <h4>offers on shop and vet</h4>
                  <h4>offers on shop and vet</h4>
                  
            </div>

            <div className="col-sm-6">
                  {/* <MainFeedComp/> */}
                  <MainDisplayUserContent/>
            </div>

            <div className="col-sm-3">
                  <SidebarChatonHome/>
            </div>
      </div>
      
    </div>
  )
}

export default MainHomeComp



