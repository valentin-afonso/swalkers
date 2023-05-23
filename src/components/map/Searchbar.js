import React, { useState } from 'react';
import { getAddress } from "../../api/getAddress"
import '../../style/Searchbar.css';

function Searchbar() {
  const [address, setAddress] = useState('');
  const [autocompleteData, setAutocompleteData] = useState([]);

  const handleSelect = (value, item) => {
    // setAddress(value);

    // Effectuer le géocodage ici en utilisant l'API Nominatim et l'adresse sélectionnée (item)
    // Par exemple, vous pouvez effectuer une requête HTTP GET à l'URL suivante :
    // `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(item.label)}&format=json`
    // Le résultat de la requête fournira les coordonnées de l'adresse sélectionnée
  };

  const handleChange = (event) => {
    setAddress(event.target.value);
    console.log(address.length)
    if (address.length >= 2) {
      getAddress(address).then(items => {
        setAutocompleteData(items)
        console.log(autocompleteData)
      });
    }
    if (address.length < 2) {
      setAutocompleteData([])
    }
  };
  const listAddress = autocompleteData.map((item, index) =>
  <li key={index}>{item}</li>
);
  return (
    
    <div className="searchbar">

        <input 
          type="text" 
          placeholder='Ou allez-vous ?' 
          value={address}
          onChange={handleChange}
          onSelect={handleSelect}
        />
        <ul>
          {listAddress}
        </ul>
    </div>
  );
}

export default Searchbar;