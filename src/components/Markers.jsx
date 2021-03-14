import React, { useContext } from 'react'
import { Marker } from 'react-leaflet';
import MapContext from './../contexts/MapContext'


const Markers = () => {
    const { stateMap } = useContext(MapContext)
    return (
        <>
            {stateMap.markers.map((marker, idx) => marker.id !==undefined ? (
            <Marker key={`marker-${idx + 1}`} position={[marker.coords[0], marker.coords[1]]}>
            </Marker>
            ) : '')}
        </>
    )
}

export default Markers