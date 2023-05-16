import React from 'react'
import '../style/Filters.css'
import Filter from './Filter'
import iconIncident from '../images/svg/icon-incident.svg'
import iconRefuge from '../images/svg/icon-refuge.svg'
import iconEclairage from '../images/svg/icon-eclairage.svg'

function Filters() {
  return (
        <ul className='filters_wrapper'>
            <li>
                <Filter icon={iconEclairage} libelle='Eclairage' CssClass='eclairage' />
            </li>
            <li>
                <Filter icon={iconIncident} libelle='Incidents' CssClass='incident'/>
            </li>
            <li>
                <Filter icon={iconRefuge} libelle='Refuges' CssClass='refuge'/>
            </li>
        </ul>
  )
}

export default Filters