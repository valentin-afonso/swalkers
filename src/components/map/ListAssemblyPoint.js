import React, { useState } from 'react';
import '../../style/ListAssemblyPoint.css'
import AssemblyPoint from './AssemblyPoint';
import iconChevron from '../../images/svg/icon-chevron.svg'
import ResumeBar from './ResumeBar';

function ListAssemblyPoint({assemblyPoint}) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => { 
    if (isOpen) {
        setIsOpen(false)
    } else {
        setIsOpen(true)
    }
  };

  // {"list_address " + (step === 2 ? 'active' : '')}
  return (
    <div className={'list_assembly_point '+ (isOpen ? 'open' : '')}>
        <header>Voir tous les trajets
            <img 
                src={iconChevron} 
                className='chevron' 
                alt="ouvrir" 
                onClick={() => open()}
            />
        </header>
        <div className='content'>
       
        </div>
        <ul>
          {assemblyPoint.map((item, index) => (
            <li key={index}>
                <AssemblyPoint 
                    timer={item.timer}
                />
                <ResumeBar />
            </li>
          ))}
        </ul>
        
    </div>
  )
}

export default ListAssemblyPoint