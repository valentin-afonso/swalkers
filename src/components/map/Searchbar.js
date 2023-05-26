import React, { useState } from 'react';
import { getAddress } from "../../api/getAddress"
import '../../style/Searchbar.css';
import ListAddress from './ListAddress';
import ListDestinationGeneral from './ListDestinationGeneral';
import ListAssemblyPoint from './ListAssemblyPoint';

function Searchbar() {
  const [step, setStep] = useState(1);
  const [address, setAddress] = useState('');
  const [autocompleteData, setAutocompleteData] = useState([]);
  const [destinationSelected, setDestinationSelected] = useState([]);
  const [destinationGeneralSelected, setDestinationGeneralSelected] = useState([]);

  const handleChange = (event) => {
    setAddress(event.target.value);
    if (address.length >= 2) {
      getAddress(address).then(items => {
        setAutocompleteData(items)
      });
    }
    if (address.length < 2) {
      setAutocompleteData([])
    }
  };
  const listAddress = autocompleteData;
  return (
    
    <div className="searchbar">

        <input 
          type="text" 
          placeholder='Ou allez-vous ?' 
          value={step === 3 ? destinationSelected.name : address}
          onChange={handleChange}
          onClick={() => setStep(2)}
        />

        <ListAddress 
          listAddress={listAddress} 
          setDestinationSelected={setDestinationSelected}
          step={step}
          setStep={setStep}
        />

        {step === 3 &&
          <ListDestinationGeneral 
            destinationSelected={destinationSelected}
            setDestinationGeneralSelected={setDestinationGeneralSelected}
            step={step}
            setStep={setStep}
          />
        }
        {step === 4 &&
          <ListAssemblyPoint 
            destinationSelected={destinationSelected}
            destinationGeneralSelected={destinationGeneralSelected}
          />
        } 
    </div>
  );
}

export default Searchbar;