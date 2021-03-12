import React from 'react';
import { Link } from "react-router-dom";

const TopNavigation = () => {
    return (
        <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/edit-information">Modifier informations</Link>
          </li>
        </ul>
      </nav>
    )
}

export default TopNavigation