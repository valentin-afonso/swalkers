import React from 'react'
import IconBack from '../../images/svg/icon-chevron.svg'
import WalkResume from './WalkResume'
import '../../style/AssemblyPointDetails.css'

function AssemblyPointDetails({timer}) {
  return (
    <div className='Assembly_point_details'>
        <div className='content_top'>
            <img 
                    src={IconBack} 
                    className="icon_back" 
                    alt="back"  
                />
            <p>Départ du groupe : {timer}min </p>
        </div>
        <WalkResume />
        <div className='content_bottom'>
            <div className='button_action'>
                <p>Je m'y rend</p>
            </div>
            <div className='time_resume'>
                <div className='arrival_time'>14h15</div>
                <div className='total_time'>30min</div>
            </div>
        </div>
    </div>
  )
}

export default AssemblyPointDetails