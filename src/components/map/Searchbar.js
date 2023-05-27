import React, { useState } from 'react';
import { getAddress } from "../../api/getAddress"
import '../../style/Searchbar.css';
import ListAddress from './ListAddress';
import ListDestinationGeneral from './ListDestinationGeneral';
import IconSearch from '../../images/svg/icon-search.svg'
import IconBack from '../../images/svg/icon-chevron.svg'


function Searchbar({setStep, step,destinationSelected, setDestinationSelected, setDestinationGeneralSelected}) {
  const [address, setAddress] = useState('');
  const [autocompleteData, setAutocompleteData] = useState([]);

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
    
    <div className="searchbar_controller">

        <div className='searchbar'>
        {step === 3 &&
          <img 
            src={IconBack} 
            className="icon_back" 
            alt="back"  
            onClick={() => setStep(2)}
          />
        }
        {step === 2 &&
          <img 
            src={IconBack} 
            className="icon_back" 
            alt="back"  
            onClick={() => setStep(1)}
          />
        }
        {step === 1 &&
          <img 
            src={IconSearch} 
            className="icon_search" 
            alt="search"  
            onClick={() => setStep(2)}
          />
        }
         
          <input 
            type="text" 
            placeholder='Ou allez-vous ?' 
            value={step === 3 ? destinationSelected.name : address}
            onChange={handleChange}
            onClick={() => setStep(2)}
          />
        </div>
        

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
        
    </div>
  );
}

export default Searchbar;