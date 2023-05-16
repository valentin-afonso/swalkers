import React from 'react';
import logo from './images/svg/logo.svg';
import './App.css';
import Map from './components/Map';
import Filters from './components/Filters';
import Searchbar from './components/Searchbar';

function App() {
  return (
    <div className="home">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <Searchbar />
        <Filters />
      </header>
      <Map />
    </div>
  );
}

export default App;
