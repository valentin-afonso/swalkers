import React from 'react';
import "../../style/LisAddress.css"

function ListAddress({listAddress, setDestinationSelected, step, setStep}) {

    const handleSelect = (item) => { 
        setDestinationSelected(item)
        setStep(3)
        console.log(item)
      };
  return (
    <div className={"list_address " + (step === 2 ? 'active' : '')}>
        <ul>
          {listAddress.map((item, index) => (
            <li key={index} onClick={() => handleSelect(item)}>{item.name}</li>
          ))}
        </ul>
    </div>
  )
}

export default ListAddress