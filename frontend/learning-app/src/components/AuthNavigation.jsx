import { Link } from 'react-router-dom';
import React from 'react'; 

function AuthNavigation() {
  return (
  
    <nav>
      <ul>
        <li><Link to="/">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </nav>

  );
}

export default AuthNavigation;