import React from 'react'
import '../../css/home.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;


const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <div id="map">
                <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[51.505, -0.09]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>


        </>
    )
}

export default Home