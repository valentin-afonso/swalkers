import React from 'react';
import { Marker, Popup } from 'react-leaflet';


import L from 'leaflet';

function AssemblyPointMarker({position, timer}) {
    const icon = new L.Icon({
        iconUrl: require('../../images/icon-assembly-point.png'),
        iconRetinaUrl: require('../../images/icon-assembly-point.png'),
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: [22, 94],
        iconSize: [86, 86],
        className: 'icon_assembly_point'
    });
      return position ? (
        <Marker position={position} icon={icon}>
          <Popup>{timer} min</Popup>
        </Marker>
      ) : null;
}

export default AssemblyPointMarker