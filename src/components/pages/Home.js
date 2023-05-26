import React from 'react';
import '../../App.css';
import Map from '../map/Map';
import Filters from '../map/Filters';
import Searchbar from '../map/Searchbar';

function Home() {

  
  return (
    <div className='home'>
         <header className="header">
            <Searchbar />
            <Filters />
          </header>
          <Map />
    </div>
  )
}

export default Home