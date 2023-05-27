import React from 'react'
import '../../style/NewMessage.css'
import iconMessage from '../../images/svg/icon-bubble.svg'
import iconChevron from '../../images/svg/icon-chevron.svg'
import iconSend from '../../images/svg/icon-alerte-message.svg'
import Toggle from '../Toggle'
import { useLocation, useNavigate } from 'react-router-dom';

function NewMessage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const contact = params.get('contact');
  const navigate = useNavigate();
  return (
    <div className='new_message'>
        <div className='content_top'>
            <h1>Méssage d'urgence</h1>
            <img 
                src={iconChevron} 
                className="icon_back" 
                alt="back"  
                onClick={() => navigate('/message')}
            />
        </div>
        <div className='content_info'>
            <p>Quel méssage voulez vous envoyer</p>
        </div>
        <div className='message_form'>
            <p>A: {contact}</p>
            <ul>
                <li>
                    <div className='content_left'>
                        <img src={iconMessage} className="icon_message" alt="message" />
                        On me suit...
                    </div>
                    <div className='content_right'>
                        <img src={iconSend} className="icon_send" alt="send message" />
                    </div>
                </li>
                <li>
                    <div className='content_left'>
                        <img src={iconMessage} className="icon_message" alt="message" />
                        J’ai été agressé physiquement
                    </div>
                    <div className='content_right'>
                        <img src={iconSend} className="icon_send" alt="send message" />
                    </div>
                </li>
                <li>
                    <div className='content_left'>
                        <img src={iconMessage} className="icon_message" alt="message" />
                        J’ai été victime d’un vol
                    </div>
                    <div className='content_right'>
                        <img src={iconSend} className="icon_send" alt="send message" />
                    </div>
                </li>
            </ul>
            <div className='toggle_position'>
                <Toggle />
                <label htmlFor="">Inclure votre localisation à la fin de votre méssage</label>
            </div>
            
        </div>
    </div>
  )
}

export default NewMessage