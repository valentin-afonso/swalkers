import React from 'react'
import "../style/Navbar.css"
import { Link } from "react-router-dom"
import profile from '../images/svg/profile.svg'
import home from '../images/svg/home.svg'
import params from '../images/svg/params.svg'
import myjourneys from '../images/svg/my-journeys.svg'

function Navbar() {
  return (
    <div className='navbar'>
        <ul>
            <li>
                <img src={home} className="link_icon" alt="home" />
                <Link to="/" className='link_libele'>Home</Link>
            </li>
            <li>
                <img src={myjourneys} className="link_icon" alt="my journeys" />
                <Link to="/my-journeys" className='link_libele'>Mes trajets</Link>
            </li>
            <li>
                <img src={profile} className="link_icon" alt="profile" />
                <Link to="/profile" className='link_libele'>Mes infos</Link>
            </li>
            <li>
                <img src={params} className="link_icon" alt="params" />
                <Link to="/params" className='link_libele'>Paramètre</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar