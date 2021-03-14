import React, { useContext } from 'react';
import MapContext from './../../contexts/MapContext';
import HelloName from './../HelloName';

const ManageMarkers = () => {
    const { stateMap, dispatchMap } = useContext(MapContext);
    return (
        <>
            <h1>Gestion des markers</h1>
            <HelloName></HelloName>
            <div className="listMarkers">

           
                {stateMap.markers.map((marker) => marker !== undefined ? (
                    <div className="markerItem">
                        <div>Marker n° {marker.id}</div>
                        <div className="coords">Coordonnées: [{marker.coords[0]}, {marker.coords[1]}]</div>
                        <div><button onClick={() => {dispatchMap({ type: "removeMarker", marker: { id: marker.id }})}}>Supprimer</button></div> 
                        <hr></hr>  
                    </div>
                
                ): '')}
             </div>
            
        </>
    );

}

export default ManageMarkers;