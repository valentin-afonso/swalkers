import React from 'react';
import { Marker, Popup } from 'react-leaflet';

function LocationMarker({ position }) {
  return position ? (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  ) : null;
}

export default LocationMarker;