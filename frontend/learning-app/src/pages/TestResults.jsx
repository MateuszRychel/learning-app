import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function TestResults() {
    const location = useLocation();
    const navigate = useNavigate();
    const { errors, time } = location.state || {};

    return (
        <div>
            <h1>Test Completed 🎉</h1>
            <p>⏱️ Time: <strong>{time} seconds</strong></p>
            <p>❌ Mistakes: <strong>{errors}</strong></p>
            <button onClick={() => navigate('/')}>Go back home</button>
        </div>
    );
}

export default TestResults;