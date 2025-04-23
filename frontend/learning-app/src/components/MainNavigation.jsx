import { Link } from 'react-router-dom';

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
