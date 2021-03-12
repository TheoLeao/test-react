import { React, useEffect, useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/pages/Home'
import EditInformation from './components/pages/EditInformation'
import TopNavigation from './components/TopNavigation';



export default function App() {
  const [userLat, setUserLat] = useState(null);
  const [userLng, setUserLng] = useState(null);
  const [statusLocalization, setStatusLocalization] = useState(null);

  useEffect(() => {
    getLocation();
   }, []);

  const getLocation = () => {
    //check that the browser has the localisation function
    if (!navigator.geolocation) {
      setStatusLocalization('Geolocation is not supported by your browser');
    } else {
      setStatusLocalization('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        setStatusLocalization(null);
        setUserLat(position.coords.latitude);
        setUserLng(position.coords.longitude);
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
          <h1>Coordinates</h1>
          <p>Statut localization: {statusLocalization}</p>
          {userLat && <p>Latitude: {userLat}</p>}
          {userLng && <p>Longitude: {userLng}</p>}
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