import React, { useState, useEffect } from 'react';
import '../../style/ListDestinationGeneral.css'
import { getGeneralDestination } from "../../api/getGeneralDestination"


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
            <li key={index} onClick={() => handleSelect(item)}>{item.name}</li>
          ))}
        </ul>
    </div>
  )
}

export default ListDestinationGeneral