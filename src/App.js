import React from 'react';
import './App.css';
import Map from './components/Map';
import Filters from './components/Filters';
import Searchbar from './components/Searchbar';

function App() {
  return (
    <div className="home">
      <header className="header">
        <Searchbar />
        <Filters />
      </header>
      <Map />
    </div>
  );
}

export default App;
