import React from 'react';
import logo from './images/svg/logo.svg';
import './App.css';

function App() {
  return (
    <div className="home">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
