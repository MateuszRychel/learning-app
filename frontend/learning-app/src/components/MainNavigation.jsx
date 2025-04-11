import { Link } from 'react-rouder-dom';

function MainNavigation() {
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Form">Form</Link>
                </li>
            </ul>
        </nav>
    )
}

// jeśli zalogowany to daje nawigacje: Home, Form
// jeśli nie to login, register