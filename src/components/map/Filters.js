import React from 'react';
import '../../style/Filters.css'
import Filter from './Filter'
import iconIncident from '../../images/svg/icon-incident.svg'
import iconRefuge from '../../images/svg/icon-refuge.svg'
import iconEclairage from '../../images/svg/icon-eclairage.svg'
import { getIncidentPoint } from "../../api/getIncidentPoint"
import { getRefugePoint } from "../../api/getRefugePoint"

function Filters({activeFilterLight, activeFilterRefuge, activeFilterIncident, setActiveFilterLight, setActiveFilterIncident, setActiveFilterRefuge, setIncidentsPoint, setRefugesPoint}) {

  const handleFilterClick = (filter) => {
    if (filter === 'eclairage') {
        setActiveFilterLight(!activeFilterLight)
    }
    if (filter === 'incident') {
        setActiveFilterIncident(!activeFilterIncident)
        getIncidents()
    }
    if (filter === 'refuge') {
        setActiveFilterRefuge(!activeFilterRefuge)
        getRefuges()
    }
  };
  const getIncidents = () => { 
    getIncidentPoint().then(incidents => {
        setIncidentsPoint(incidents)
    });
  };
  const getRefuges = () => { 
    getRefugePoint().then(refuges => {
        setRefugesPoint(refuges)
    });
  };
  return (
        <ul className='filters_wrapper'>
            {activeFilterLight}
            <li>
                <Filter 
                    icon={iconEclairage} 
                    libelle='Eclairage' 
                    CssClass={`eclairage ${activeFilterLight ? 'active' : ''}`}
                    onClick={() => handleFilterClick('eclairage')}
                />
            </li>
            <li>
                <Filter 
                    icon={iconIncident} 
                    libelle='Incidents' 
                    CssClass={`incident ${activeFilterIncident ? 'active' : ''}`}
                    onClick={() => handleFilterClick('incident')}
                />
            </li>
            <li>
                <Filter 
                    icon={iconRefuge} 
                    libelle='Refuges' 
                    CssClass={`refuge ${activeFilterRefuge ? 'active' : ''}`}
                    onClick={() => handleFilterClick('refuge')}
                />
            </li>
        </ul>
  )
}

export default Filters