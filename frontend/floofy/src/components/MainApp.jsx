import React from 'react'
import App_Bar from './App_Bar'
import LeftDrawer from './LeftDrawer'
import HomePageContent from './HomePageContent'

function MainApp() {
      return (
            <div>
                  <App_Bar />
                  <LeftDrawer />
                  <div className="content">
                        <HomePageContent />
                  </div>
            </div>
      )
}

export default MainApp
