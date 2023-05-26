import React from 'react';
import "../../style/LisAddress.css"
import iconPin from "../../images/svg/icon-pin.svg"

function ListAddress({listAddress, setDestinationSelected, step, setStep}) {

    const handleSelect = (item) => { 
        setDestinationSelected(item)
        setStep(3)
        console.log(item)
      };
  return (
    <div className={"list_address " + (step === 2 ? 'active' : '')}>
      <p className='list_title'>Où voulez-vous aller ?</p>
        <ul>
          {listAddress.map((item, index) => (
            <li key={index} onClick={() => handleSelect(item)}>
              <div className='content_icon'>
                <img src={iconPin} className='icon-pin' alt="address" width="13" height="17"/>
              </div>
              <p className='content_text'>{item.name}</p>    
            </li>
          ))}
        </ul>
    </div>
  )
}

export default ListAddress