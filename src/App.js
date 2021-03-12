import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/pages/Home'
import EditInformation from './components/pages/EditInformation'
import TopNavigation from './components/TopNavigation';


export default function App() {
  return (
    <Router>
      <div>
       <TopNavigation></TopNavigation>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/edit-information">
            <Home />
          </Route>
          <Route path="/">
            <EditInformation />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}