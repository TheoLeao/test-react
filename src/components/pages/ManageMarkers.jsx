import React, { useContext } from 'react';
import MapContext from './../../contexts/MapContext';

const ManageMarkers = () => {

    const { state } = useContext(MapContext);

    console.log(state);
    return (
        <>
            <h1>Gestion des markers</h1>

            <ul>
                {state.markers.map(marker => {
                    <li>{marker.id}</li>
                })}
            </ul>
        </>
    );

}

export default ManageMarkers;