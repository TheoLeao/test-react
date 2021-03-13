import React, { useContext, useState, useReducer } from 'react'
import '../../css/home.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

import MapContext from '../../contexts/MapContext';
import GeoLocation from '../../components/GeoLocation'
import Markers from '../Markers'


let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;



const Home = () => {

    //Récupération du state et de dispatch depuis MapContext
    const { state, dispatch } = useContext(MapContext)

    const EventClick = () => {
        const map = useMapEvents({
            click(e) {     
                let id = state.markers.length === 0 ? 1 : state.markers[state.markers.length-1].id+1;        
                dispatch({ type: "addMarker", marker: { id: id ,coords: [e.latlng.lat, e.latlng.lng] }, nextID: state.nextID});
            },            
        })
        return <></>
    }
    return (
        <>
            <h1>Home</h1>
            <div id="map">
                <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <EventClick></EventClick>
                    <GeoLocation></GeoLocation>

                    <Markers></Markers>

                </MapContainer>
            </div>


        </>
    )
}

export default Home