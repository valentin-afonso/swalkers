import React from 'react';
import "../../style/LisAddress.css"
import iconPin from "../../images/svg/icon-pin.svg"

function ListAddress({listAddress, setDestinationSelected, step, setStep}) {

    const handleSelect = (item) => { 
        setDestinationSelected(item)
        setStep(3)
        console.log(item)
      };
      const short = (str, length) => {
        if (str.length <= length) {
            return str; 
        } else {
            var shortStr = str.substring(0, length); 
            shortStr += "..."; 
            return shortStr;
        }
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
              <p className='content_text'>{short(item.name, 50)}</p>    
            </li>
          ))}
        </ul>
    </div>
  )
}

export default ListAddress