import React from 'react'
import '../../style/AlerteMenu.css'
import AlerteItem from './AlerteItem'
import iconMessage from "../../images/svg/icon-alerte-message.svg"
import iconAppel from "../../images/svg/icon-alerte-appel.svg"
import iconIncident from "../../images/svg/icon-alerte-incident.svg"

function AlerteMenu({menuAlerteOpen}) {
  return (
    <div className={'alerte_menu '+ (menuAlerteOpen ? 'open' : '')}>
        <ul>
            <li>
                <AlerteItem icon={iconAppel} libelle="Appel d'urgence" path="/call"/>
            </li>
            <li>
                <AlerteItem icon={iconMessage} libelle="Message d'urgence" path="/message"/>
            </li>
            <li>
                <AlerteItem icon={iconIncident} libelle="Signaler un incident" path="/incident"/>
            </li>
        </ul>
    </div>
  )
}

export default AlerteMenu