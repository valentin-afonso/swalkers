import React, { useState, useEffect } from 'react';
import '../style/Map.css'

import { MapContainer, TileLayer } from 'react-leaflet'
import LocationMarker from './LocationMarker';

function Map() {
    const [position, setPosition] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((currentPosition) => {
        const { latitude, longitude } = currentPosition.coords;
        setPosition([latitude, longitude]);
        });
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