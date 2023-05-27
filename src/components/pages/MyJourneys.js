import React from 'react'
import '../../style/MyJourneys.css'
import Journeys from '../Journeys'

function MyJourneys() {
  return (
    <div className='journeys'>
      <h1>Mes trajets</h1>
      <div className='list_journeys'>
        <p className='date'>12/11/2022</p>
        <ul>
          <li>
            <Journeys 
              generalDestination="Commerce"
              finalDestinatio="Fnac, Nantes"
            />
          </li>
          <li>
            <Journeys 
              generalDestination="Commerce"
              finalDestinatio="Fnac, Nantes"
            />
          </li>
          <li>
            <Journeys 
              generalDestination="Commerce"
              finalDestinatio="Fnac, Nantes"
            />
          </li>
          <li>
            <Journeys 
              generalDestination="Commerce"
              finalDestinatio="Fnac, Nantes"
            />
          </li>
          <li>
            <Journeys 
              generalDestination="Commerce"
              finalDestinatio="Fnac, Nantes"
            />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MyJourneys