import React from 'react'
import "../style/Navbar.css"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className='navbar'>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/my-journeys">Mes trajets</Link>
            </li>
            <li>
                <Link to="/profile">Mes infos</Link>
            </li>
            <li>
                <Link to="/params">Paramètre</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar