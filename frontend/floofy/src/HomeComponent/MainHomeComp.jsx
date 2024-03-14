import React from 'react'
// import SidebarChatonHome from './ChatComponent/SidebarChatonHome'
// import MainFeedComp from './FeedComponent/MainFeedComp'
import MainDisplayUserContent from '../Profile/DisplayAllUserContent/MainDisplayUserContent'
import MainShopOffer from './ShowOffersOnShopAndVet/displayShopOffer/MainShopOffer'
import MainVetOffer from './ShowOffersOnShopAndVet/ShowVetOffers/DisplayVetOffers'
// import bgImage from "../Assets/bgImage.jpg"

function MainHomeComp() {
  return (
        <div className='container-fluid bg-light-subtle '>
      <div className="row">
            <div className="col-sm-3 border-end">
                  
                  <MainShopOffer/>

                  
                  
            </div>

            <div className="col-sm-6 border-end">
                  
                  {/* <MainFeedComp/> */}
                  <MainDisplayUserContent/>
            </div>

            <div className="col-sm-3">
                  <MainVetOffer/>
            </div>
      </div>
      
    </div>

      

  )
}

export default MainHomeComp



