import React, { useEffect, useState } from 'react'
import { TileLayer, MapContainer as LeafletMap, useMap } from "react-leaflet";

const GeoLocation = () => {
    const map = useMap();
    const [latitude, setLatitude] = useState(undefined)
    const [longitude, setLongitude] = useState(undefined)
    const [isGeoloc, setIsGeoloc] = useState(undefined)

    //Récuperer la géolocalisation lorsque geoloc est true
    useEffect(() => {
        if (isGeoloc === false) return;
        navigator.geolocation.getCurrentPosition((positon) => {
            setLatitude(positon.coords.latitude)
            setLongitude(positon.coords.longitude)
        })
    }, [isGeoloc])

    useEffect(() => {
        if (latitude && longitude) {
            //map.setView([latitude,longitude])
            map.flyTo([latitude, longitude], map.getZoom())
        }
    }, [latitude, longitude])

    return (
        <></>
    )
}

export default GeoLocation;