import React from 'react'
import '../../style/MessageEmergency.css'
import iconClose from '../../images/svg/icon-close.svg'
import iconChevron from '../../images/svg/icon-chevron.svg'
import { useNavigate } from 'react-router-dom';

function MessageEmergency() {

  const navigate = useNavigate();
  return (
    <div className='message_emergency'>
    <div className='content_top'>
        <h1>Méssage d'urgence</h1>
        <img 
            src={iconClose} 
            className="icon_close" 
            alt="close" 
            onClick={() => navigate('/home')}
        />
    </div>
    <div className='content_info'>
        <p>Choisissez un contact</p>
    </div>
    <div className='contact_list'>
        <p>A:</p>
        <ul>
            <li onClick={() => navigate('/new-message?contact=Thomas')}>
                Thomas
                <img src={iconChevron} className="icon_chevron" alt="icon" />
            </li>
            <li onClick={() => navigate('/new-message?contact=Florian')}>
                Florian
                <img src={iconChevron} className="icon_chevron" alt="icon" />
            </li>
            <li onClick={() => navigate('/new-message?contact=Theo')}>
                Theo
                <img src={iconChevron} className="icon_chevron" alt="icon" />
            </li>
        </ul>
    </div>
</div>
    
  )
}

export default MessageEmergency