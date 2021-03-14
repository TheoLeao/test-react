import { React, useEffect, useState, useReducer } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/pages/Home'
import EditInformation from './components/pages/EditInformation'
import ManageMarkers from './components/pages/ManageMarkers';
import TopNavigation from './components/TopNavigation';
import MapContext from './contexts/MapContext';
import mapReducer from './reducers/mapReducer'
import UserContext from './contexts/UserContext'
import userReducer from './reducers/userReducer'
import './css/app.scss'

export default function App() {

  //Définition de state et de dispatch
  const [stateMap, dispatchMap] = useReducer(mapReducer, { markers: [] })
  const [stateUser, dispatchUser] = useReducer(userReducer, { user: { firstName: '', lastName: '' } })


  return (
    <>
      <UserContext.Provider value={{ stateUser, dispatchUser }}>
        <MapContext.Provider value={{ stateMap, dispatchMap }}>
          <Router>
            <div>
              <TopNavigation></TopNavigation>
              <div class="main">
                <Switch>
                  <Route path="/edit-information">
                    <EditInformation />
                  </Route>
                  <Route path="/manage-markers">
                    <ManageMarkers />
                  </Route>
                  <Route path="/">
                    <Home />
                  </Route>
                </Switch>
              </div>

            </div>
          </Router>
        </MapContext.Provider>
      </UserContext.Provider>
    </>


  );
}