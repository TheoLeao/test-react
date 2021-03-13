import React, { useContext } from 'react'
import { Marker, Popup } from 'react-leaflet';
import MapContext from './../contexts/MapContext'


const Markers = () => {
    const { state } = useContext(MapContext)
    return (
        <>
            {state.markers.map((marker, idx) => marker.id !==undefined ? (
            <Marker key={`marker-${idx + 1}`} position={[marker.coords[0], marker.coords[1]]}>
            </Marker>
            ) : '')}
        </>
    )
}

export default Markers