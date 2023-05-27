import React from 'react'
import "../../style/AlerteButton.css"
import iconAlerte from "../../images/svg/icon-alerte.svg"

function AlerteButton({menuAlerteOpen, setMenuAlerteOpen}) {

  const open = () => { 
    if (menuAlerteOpen) {
      setMenuAlerteOpen(false)
    } else {
      setMenuAlerteOpen(true)
    }
  };
  return (
    <div className='alerte_button' onClick={() => open()} >
        <img src={iconAlerte} className="icon_alerte" alt="alerte" />
    </div>
  )
}

export default AlerteButton