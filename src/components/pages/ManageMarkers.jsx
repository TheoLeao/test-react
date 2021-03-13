import React, { useContext } from 'react';
import MapContext from './../../contexts/MapContext';

const ManageMarkers = () => {
    const { state, dispatch } = useContext(MapContext);
    return (
        <>
            <h1>Gestion des markers</h1>

            <ul>
                {state.markers.map((marker) => marker !== undefined ? (
                    <li>Marker n° {marker.id} situé aux cordonnées suivantes: [{marker.coords[0]}, {marker.coords[1]}] | <button onClick={() => {dispatch({ type: "removeMarker", marker: { id: marker.id }})}}>Delete</button></li>
                ): '')}
            </ul>
        </>
    );

}

export default ManageMarkers;