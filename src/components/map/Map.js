import React, { useState, useEffect } from 'react';
import '../../style/Map.css'

import { MapContainer, TileLayer } from 'react-leaflet'
import LocationMarker from './LocationMarker';
import AssemblyPointMarker from './AssemblyPointMarker';
import IncidentPointMarker from './IncidentPointMarker';
import RefugePointMarker from './RefugePointMarker';

function Map({assemblyPoint, incidentsPoint, refugesPoint, activeFilterLight, activeFilterRefuge, activeFilterIncident }) {
    const [position, setPosition] = useState(null);
    /*
    useMapEvents({
        click: () => {
          //... 
        },
    })
    */

    useEffect(() => {
        const getPosition = () => {
          navigator.geolocation.watchPosition(
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


        
        /*
        //stop watching after 10 seconds
        setTimeout(() => {
            navigator.geolocation.clearWatch(id)
        }, 10 * 1000)
        */

    // TILES exemple : 
    // https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png
    // https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}.png
  return (
    <div id='map'>
        {position && (
        <MapContainer center={position} zoom={14} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
            />
            <LocationMarker position={position} />
            {assemblyPoint.map((item, index) => (
            <li key={index}>
                <AssemblyPointMarker 
                  position={[item.coord.lat, item.coord.lon]}
                  timer={item.timer}
                />
            </li>
          ))}
    
            {activeFilterIncident &&incidentsPoint.map((item, index) => (
              <li key={index}>
                  <IncidentPointMarker 
                    position={[item.coord.lat, item.coord.lon]}
                  />
              </li>
            ))}
      
          {activeFilterRefuge && refugesPoint.map((item, index) => (
            <li key={index}>
                <RefugePointMarker 
                  position={[item.coord.lat, item.coord.lon]}
                />
            </li>
          ))}
        </MapContainer>
        )}
    </div>
  )
}

export default Map