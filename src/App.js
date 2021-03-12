import { React, useEffect, useState, useReducer } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/pages/Home'
import EditInformation from './components/pages/EditInformation'
import TopNavigation from './components/TopNavigation';
import MapContext from './contexts/MapContext';
import mapReducer from './reducers/mapReducer'

export default function App() {
  //Définition de state et de dispatch
  const [state, dispatch] = useReducer(mapReducer, { markers: [{id: 1, coords: [51.505, -0.09]}] } )


  return (
    <>
      <MapContext.Provider value={{ state, dispatch }}>
        <Router>
          <div>
            <TopNavigation></TopNavigation>
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
      </MapContext.Provider>
    </>


  );
}