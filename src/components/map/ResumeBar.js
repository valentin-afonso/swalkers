import React from 'react'
import '../../style/ResumeBar.css'
import iconWalk from '../../images/svg/icon-walk.svg'
import iconWalkTogether from '../../images/svg/icon-walk-together.svg'
import iconSeparator from '../../images/svg/icon-chevron.svg'

function ResumeBar() {
  return (
    <div className='resumebar'>
        <div className='part-one'>
          <img src={iconWalk} className='icon-walk' alt="icon" />
          <div className='time'>5min</div>
        </div>
        <div className='separator'>
          <img src={iconSeparator} className='icon-chevron' alt="icon" />
        </div>
        <div className='part-two'>
          <img src={iconWalkTogether} className='icon-walk' alt="icon" />
          <div className='time'>10min</div>
        </div>
        <div className='separator'>
          <img src={iconSeparator} className='icon-chevron' alt="icon" />
        </div>
        <div className='part-three'>
          <img src={iconWalk} className='icon-walk' alt="icon" />
          <div className='time'>3min</div>
        </div>
    </div>
  )
}

export default ResumeBar