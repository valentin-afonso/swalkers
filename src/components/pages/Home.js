import React, { useState, useEffect } from 'react';
import '../../App.css';
import Map from '../map/Map';
import Filters from '../map/Filters';
import Searchbar from '../map/Searchbar';
import ListAssemblyPoint from '../map/ListAssemblyPoint';
import { getAssemblyPoint } from "../../api/getAssemblyPoint"

function Home() {
  const [step, setStep] = useState(1);
  const [destinationGeneralSelected, setDestinationGeneralSelected] = useState([]);
  const [assemblyPoint, setAssemblyPoint] = useState([]);

    useEffect(() => {
        getAssemblyPoint(destinationGeneralSelected.id).then(item => {
            setAssemblyPoint(item)
        });
    }, [destinationGeneralSelected]);

  return (
    <div className='home'>
         <header className="header">
            <Searchbar 
              setStep={setStep}
              step={step}
              setDestinationGeneralSelected={setDestinationGeneralSelected}
            />
            <Filters />
          </header>
          <Map 
            assemblyPoint={assemblyPoint}
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