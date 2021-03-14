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
import UserContext from './../../contexts/UserContext';
import HelloName from './../HelloName'


let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;



const Home = () => {

    //Récupération du state et de dispatch depuis MapContext
    const { stateMap, dispatchMap } = useContext(MapContext)
    const { stateUser } = useContext(UserContext)

    const EventClick = () => {
        const map = useMapEvents({
            click(e) {
                let id = stateMap.markers.length === 0 ? 1 : stateMap.markers[stateMap.markers.length - 1].id + 1;
                navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
                if (navigator.vibrate) {
                    // vibration API supported
                    navigator.vibrate(300);
                }
                dispatchMap({ type: "addMarker", marker: { id: id, coords: [e.latlng.lat, e.latlng.lng] }, nextID: stateMap.nextID });
            },
        })
        return <></>
    }
    return (
        <>
            <h1>Home</h1>
            <HelloName></HelloName>
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