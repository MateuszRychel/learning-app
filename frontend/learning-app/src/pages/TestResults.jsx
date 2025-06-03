import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function TestResults() {
    const location = useLocation();
    const navigate = useNavigate();
    const { errors, time } = location.state || {};

    return (
        <div className="w-screen h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md text-center">
                <h1 className="text-2xl font-bold mb-6 text-green-600">Test Completed 🎉</h1>
                
                <p className="text-lg mb-2 text-gray-800">
                    ⏱️ Time: <span className="font-semibold">{time} seconds</span>
                </p>
                <p className="text-lg mb-6 text-gray-800">
                    ❌ Mistakes: <span className="font-semibold">{errors}</span>
                </p>

                <button
                    onClick={() => navigate('/')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
                >
                    Go Back Home
                </button>
            </div>
        </div>
    );
}

export default TestResults;
