import { Link } from 'react-router-dom';
import React from 'react';

function Home() {
    return (
        <div>
            <h1>Home page</h1>
            <Link to="/form">Form</Link>
        </div>
    );
}

export default Home;
