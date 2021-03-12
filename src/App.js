import { React, useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/pages/Home'
import EditInformation from './components/pages/EditInformation'
import TopNavigation from './components/TopNavigation';



export default function App() {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [statusLocalization, setStatusLocalization] = useState(null);

  
  const getLocation = () => {
    //check that the browser has the localisation function
    if (!navigator.geolocation) {
      setStatusLocalization('Geolocation is not supported by your browser');
    } else {
      setStatusLocalization('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        setStatusLocalization(null);
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      }, () => {
        setStatusLocalization('Unable to retrieve your location');
      });
    }
  }

  return (
    <Router>
      <div>
        <TopNavigation></TopNavigation>
        <div>
          <button onClick={getLocation}>Get Location</button>
          <h1>Coordinates</h1>
          <p>{statusLocalization}</p>
          {lat && <p>Latitude: {lat}</p>}
          {lng && <p>Longitude: {lng}</p>}
        </div>


        <Switch>
          <Route path="/edit-information">
            <EditInformation />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}