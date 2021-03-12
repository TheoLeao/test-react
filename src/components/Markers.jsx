import React, { useContext } from 'react'
import { Marker, Popup } from 'react-leaflet';
import MapContext from './../contexts/MapContext'


const Markers = () => {
    const { state } = useContext(MapContext)
    return (
        <>
            {state.markers.map((marker, idx) => (
                <Marker key={`marker-${idx}`} position={[marker.coords[0], marker.coords[1]]}>
                    <Popup>
                        Marker id: {idx}
                    </Popup>
                </Marker>

            ))}
        </>
    )
}

export default Markers