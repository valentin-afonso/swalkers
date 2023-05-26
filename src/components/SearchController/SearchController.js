import React, { useState, useEffect } from 'react';
import { getAddress } from "../../api/getAddress"
import { getGeneralDestination } from "../../api/getGeneralDestination"
import '../../style/Searchbar.css';
import ListAddress from './ListAddress';
import ListDestinationGeneral from './ListDestinationGeneral';

function SearchController() {

    const [step, setStep] = useState(1);
    const [address, setAddress] = useState('');
    const [autocompleteData, setAutocompleteData] = useState([]);
    const [destinationSelected, setDestinationSelected] = useState([]);
    const [destinationGeneral, setDestinationGeneral] = useState([]);
  
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
    <div className="search_controller">    
        <ListAddress 
        listAddress={listAddress} 
        setDestinationSelected={setDestinationSelected}
        step={step}
        setStep={setStep}
        />
        {step === 3 &&
        <ListDestinationGeneral 
            destinationSelected={destinationSelected}
            setDestinationGeneralSelected={setDestinationGeneral}
            step={step}
            setStep={setStep}
        />
        }
    </div>
  )
}

export default SearchController