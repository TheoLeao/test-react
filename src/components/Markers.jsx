import React from 'react'
import {  Marker, Popup } from 'react-leaflet';

const MarkerItem = ({ position }) => {
    return (
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
      </Marker>
    )}
   

const Markers = () => {
    return (
        <>
           
        </>
    )
}

export default Markers