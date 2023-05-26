import React, { useState, useEffect } from 'react';
import '../../style/ListAssemblyPoint.css'
import { getAssemblyPoint } from "../../api/getAssemblyPoint"
import AssemblyPoint from './AssemblyPoint';

function ListAssemblyPoint({destinationSelected, destinationGeneralSelected}) {

    const [assemblyPoint, setAssemblyPoint] = useState([]);
    useEffect(() => {
        getAssemblyPoint(destinationGeneralSelected.id).then(item => {
            console.log(item)
            setAssemblyPoint(item)
        });
    }, [destinationGeneralSelected]);

  return (
    <div className='list_assembly_point'>
        <header>Voir tous les trajets</header>
        <div className='content'>
            <p>Destination général : {destinationGeneralSelected.id}</p>
            <p>Destination final : {destinationSelected.name}</p>
        </div>
        <ul>
          {assemblyPoint.map((item, index) => (
            <li key={index}>
                <AssemblyPoint 
                    timer={item.timer}
                />
            </li>
          ))}
        </ul>
        
    </div>
  )
}

export default ListAssemblyPoint