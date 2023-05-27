import React from 'react'
import '../style/Journeys.css'
import IconMarker from '../images/svg/icon-marker.svg'
import IconFlag from '../images/svg/icon-flag.svg'
import IconSeparator from '../images/svg/icon-separator.svg'
import ImageMap from '../images/fake-map.png'

function Journeys({generalDestination, finalDestination}) {
  return (
    <div className='journey'>
        <div className='content_destinations'>
            <div className='general'>
            <img src={IconMarker} className="icon_marker" alt="icon" />
            Commerce
            </div>
            <div className='separator'>
                <img src={IconSeparator} className="icon_separator" alt="icon" />
            </div>
            <div className='final'>
            <img src={IconFlag} className="icon_flag" alt="icon" />
            Fnac
            </div> 
        </div>
        <div className='content_image'>
            <img src={ImageMap} className="map" alt="map" />
        </div>

    </div>
  )
}

export default Journeys