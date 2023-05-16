import React from 'react';
import logo from './images/svg/logo.svg';
import './App.css';
import Map from './components/Map';

function App() {
  return (
    <div className="home">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
      </header>
      <Map />
    </div>
  );
}

export default App;
