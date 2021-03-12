import { React, useEffect, useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/pages/Home'
import EditInformation from './components/pages/EditInformation'
import TopNavigation from './components/TopNavigation';
import MapContext from './contexts/MapContext';

export default function App() {

  return (
    <>
      <MapContext.Provider value={{}}>
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