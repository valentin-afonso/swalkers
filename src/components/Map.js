import React, { useState, useEffect } from 'react';
import '../style/Map.css'

import { MapContainer, TileLayer } from 'react-leaflet'
import LocationMarker from './LocationMarker';

function Map() {
    const [position, setPosition] = useState(null);

    useEffect(() => {
        const getPosition = () => {
          navigator.geolocation.getCurrentPosition(
            (currentPosition) => {
              const { latitude, longitude } = currentPosition.coords;
              setPosition([latitude, longitude]);
            },
            (error) => {
              // err.code === 1 user denied accessing the location
              // err.code === 2 for any internal errors
              // err.code === 3 error due to timeout
              if (error.code === 1 || error.code === 2 || error.code === 3) {
                // ECV Nantes coord by default
                setPosition([47.2173485,-1.5678584]);
              }
            }
          );
        };
        getPosition();
      }, []);


   


    // TILES exemple : 
    // https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png
    // https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}.png
  return (
    <div id='map'>
        {position && (
        <MapContainer center={position} zoom={20} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
            />
            <LocationMarker position={position} />
        </MapContainer>
        )}
    </div>
  )
}

export default Map