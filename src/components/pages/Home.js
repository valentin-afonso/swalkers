import React, { useState, useEffect } from 'react';
import '../../App.css';
import Map from '../map/Map';
import Filters from '../map/Filters';
import Searchbar from '../map/Searchbar';
import ListAssemblyPoint from '../map/ListAssemblyPoint';
import { getAssemblyPoint } from "../../api/getAssemblyPoint"
import AlerteButton from '../map/AlerteButton';
import AlerteMenu from '../map/AlerteMenu';
import RecapSearchBar from '../map/RecapSearchBar';

function Home() {
  const [step, setStep] = useState(1);
  const [destinationGeneralSelected, setDestinationGeneralSelected] = useState([]);
  const [destinationSelected, setDestinationSelected] = useState([]);
  const [assemblyPoint, setAssemblyPoint] = useState([]);
  const [menuAlerteOpen, setMenuAlerteOpen] = useState(false);

  const [activeFilterLight, setActiveFilterLight] = useState(false);
  const [activeFilterRefuge, setActiveFilterRefuge] = useState(false);
  const [activeFilterIncident, setActiveFilterIncident] = useState(false);
  const [incidentsPoint, setIncidentsPoint] = useState([]);
  const [refugesPoint, setRefugesPoint] = useState([]);

    useEffect(() => {
        getAssemblyPoint(destinationGeneralSelected.id).then(item => {
            setAssemblyPoint(item)
        });
    }, [destinationGeneralSelected]);


  return (
    <div className='home'>
         <header className="header">
         {step !== 4 &&
            <Searchbar 
              setStep={setStep}
              step={step}
              destinationSelected={destinationSelected}
              setDestinationSelected={setDestinationSelected}
              setDestinationGeneralSelected={setDestinationGeneralSelected}
            />
         }
            {step !== 4 &&
              <Filters 
                activeFilterLight={activeFilterLight}
                activeFilterRefuge={activeFilterRefuge}
                activeFilterIncident={activeFilterIncident}
                setActiveFilterLight={setActiveFilterLight}
                setActiveFilterIncident={setActiveFilterIncident}
                setActiveFilterRefuge={setActiveFilterRefuge}
                setIncidentsPoint={setIncidentsPoint}
                setRefugesPoint={setRefugesPoint}
              />
            }
            {step === 4 &&
              <RecapSearchBar 
                setStep={setStep}
                destinationSelected={destinationSelected}
                destinationGeneralSelected={destinationGeneralSelected}
              />
            }
          </header>
          <AlerteButton 
            menuAlerteOpen={menuAlerteOpen}
            setMenuAlerteOpen={setMenuAlerteOpen}
          />
          <AlerteMenu menuAlerteOpen={menuAlerteOpen}/>
          <Map 
            assemblyPoint={assemblyPoint}
            incidentsPoint={incidentsPoint}
            refugesPoint={refugesPoint}
            activeFilterLight={activeFilterLight}
            activeFilterRefuge={activeFilterRefuge}
            activeFilterIncident={activeFilterIncident}
          />
          {step === 4 &&
          <ListAssemblyPoint 
            assemblyPoint={assemblyPoint}
          />
        } 
    </div>
  )
}

export default Home