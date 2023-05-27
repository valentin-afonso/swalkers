import React from 'react'
// import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import '../../style/AlerteItem.css'

function AlerteItem({icon, libelle, path}) {
  const navigate = useNavigate();
  return (
    <div className='alerte_item' onClick={() => navigate(path)}>
        <div className='content_image'>
            <img src={icon} className="item_icon" alt="icon" />
        </div>
        <p className='link_libele'>{libelle}</p>
    </div>
  )
}

export default AlerteItem