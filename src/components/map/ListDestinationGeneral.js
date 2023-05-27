import React, { useState, useEffect } from 'react';
import '../../style/ListDestinationGeneral.css'
import { getGeneralDestination } from "../../api/getGeneralDestination"
import iconPin from "../../images/svg/icon-pin.svg"


function ListDestinationGeneral({destinationSelected, setDestinationGeneralSelected, step, setStep}) {

    const [destinationGeneral, setDestinationGeneral] = useState([]);
   
    useEffect(() => {
        getGeneralDestination(destinationSelected).then(generalDestination => {
            setDestinationGeneral(generalDestination)
        });
    }, [destinationSelected]);

    const handleSelect = (item) => { 
        setDestinationGeneralSelected(item)
        setStep(4)
      };
  return (
    <div className={"list_destination_general " + (step === 3 ? 'active' : '')}>
        <p className='list_title'>Ce déplacer à plusieurs jusqu’à :</p>
        <ul>
          {destinationGeneral.map((item, index) => (
            <li key={index} onClick={() => handleSelect(item)}>
              <div className='content_icon'>
                <img src={iconPin} className='icon-pin' alt="address" width="13" height="17"/>
              </div>
              <p className='content_text'>{item.name}</p>    
              <span className='time'>à 11min</span>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default ListDestinationGeneral