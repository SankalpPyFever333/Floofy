// render all the component of this profile page.

import React from 'react'
import TabOfPostVideo from './TabOfPostVideo'
import ProfileWithBUtton from './ProfileWithBUtton'

function MainProfileComponent() {
  return (
    <div>
      <ProfileWithBUtton/>
      <TabOfPostVideo/>
    </div>
  )
}

export default MainProfileComponent



