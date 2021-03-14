import React, { useContext } from 'react';
import MapContext from './../../contexts/MapContext';
import HelloName from './../HelloName';

const ManageMarkers = () => {
    const { stateMap, dispatchMap } = useContext(MapContext);
    return (
        <>
            <h1>Gestion des markers</h1>
            <HelloName></HelloName>
            <ul>
                {stateMap.markers.map((marker) => marker !== undefined ? (
                    <li>Marker n° {marker.id} situé aux cordonnées suivantes: [{marker.coords[0]}, {marker.coords[1]}] | <button onClick={() => {dispatchMap({ type: "removeMarker", marker: { id: marker.id }})}}>Delete</button></li>
                ): '')}
            </ul>
        </>
    );

}

export default ManageMarkers;