import React, { useContext } from 'react';
import MapContext from './../../contexts/MapContext';

const ManageMarkers = () => {

    const { state } = useContext(MapContext);

    console.log(state.markers);

    return (
        <>
            <h1>Gestion des markers</h1>

            <ul>
                {state.markers.map((marker) => (
                    <li>Marker n°{marker.id} situé aux cordonnées suivantes: [{marker.coords[0]}, {marker.coords[1]}]</li>
                ))}
            </ul>
        </>
    );

}

export default ManageMarkers;