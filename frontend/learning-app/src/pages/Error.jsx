import { Link } from 'react-router-dom';
import React from 'react';

export default function Error() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-100 text-center px-6">
            <h1 className="text-6xl font-bold text-yellow-700 mb-4">404</h1>
            <p className="text-xl font-medium text-gray-800 mb-6">
                This is not the web page you are looking for.
            </p>
            <img 
                src="/404-github-style.png" 
                alt="GitHub-style 404 illustration" 
                className="max-w-md w-full mb-6"
            />
            <Link
                to="/"
                className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
                Back to Home
            </Link>
        </div>
    );
}