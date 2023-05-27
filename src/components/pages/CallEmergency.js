import React from 'react'
import '../../style/CallEmergency.css'
import iconClose from '../../images/svg/icon-close.svg'
import iconChevron from '../../images/svg/icon-chevron.svg'
import { useNavigate } from 'react-router-dom';

function CallEmergency() {
  const navigate = useNavigate();
  return (
    <div className='call_emergency'>
        <div className='content_top'>
            <h1>Appel d'urgence</h1>
            <img 
                src={iconClose} 
                className="icon_close" 
                alt="close" 
                onClick={() => navigate('/home')}
            />
        </div>
        <div className='content_info'>
            <p>Appeler vos proches ou les forces de l’ordre</p>
        </div>
        <div className='contact_list'>
            <p>Vos contacts</p>
            <ul>
                <li>
                    Thomas
                    <img src={iconChevron} className="icon_chevron" alt="icon" />
                </li>
                <li>
                    Florian
                    <img src={iconChevron} className="icon_chevron" alt="icon" />
                </li>
                <li>
                    Theo
                    <img src={iconChevron} className="icon_chevron" alt="icon" />
                </li>
            </ul>
        </div>
        <div className='call_button'>
            <p>Appeler les forces de l'ordre</p>
        </div>
    </div>
  )
}

export default CallEmergency