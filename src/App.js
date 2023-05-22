import React from 'react';
import './style/Authorization.css';
import logo from './images/svg/logo.svg'
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="authorization">
      <img src={logo} className="logo" alt="swalkers" />
      <div className='content'>
        <p>Voulez-vous afficher votre position ?</p>
        <Link to="/home" className='link_home'>Afficher ma position</Link>
      </div>
    </div>
  );
}

export default App;