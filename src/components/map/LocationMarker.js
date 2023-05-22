import React from 'react';
import { Marker, Popup } from 'react-leaflet';


import L from 'leaflet';


function LocationMarker({ position }) {
  const icon = new L.Icon({
    iconUrl: require('../../images/marker-me.png'),
    iconRetinaUrl: require('../../images/marker-me.png'),
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: [22, 94],
    iconSize: [86, 86],
    className: 'marker-me'
});
  return position ? (
    <Marker position={position} icon={icon}>
      <Popup>You are here</Popup>
    </Marker>
  ) : null;
}

export default LocationMarker;