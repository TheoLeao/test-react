import React from 'react';
import { Link } from "react-router-dom";

const TopNavigation = () => {
  return (
    /*<nav>
    <ul>
      <li>
       
      </li>
      <li>
        <Link to="/edit-information">Modifier informations</Link>
      </li>
      <li>
        <Link to="/manage-markers">Gestion des markers</Link>
      </li>
    </ul>
  </nav>*/
    <div class="navbar">

      <label for="togglericon" class="toggler" checked></label>
      <input type="checkbox" id="togglericon" class="toggler" />

      <div class="brand">
        <span class="brand-icon"><img src="https://theoboudier.fr/ressources/img/logos/logo-2.svg" class="logo" alt="Logo de Théo Boudier"/></span>
        <span class="brand-name">Théo boudier</span>
      </div>

      <div class="nav">

        <Link to="/">Accueil</Link>
        <Link to="/edit-information">Modifier informations</Link>
        <Link to="/manage-markers">Gestion des markers</Link>

      </div>
    </div>
  )
}

export default TopNavigation