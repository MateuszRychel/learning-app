import { Link } from 'react-router-dom';
import React from 'react';

function MainNavigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/form">Form</Link></li>
      </ul>
    </nav>
  );
}

export default MainNavigation;
