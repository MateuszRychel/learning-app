import { Link } from 'react-router-dom';
import React from 'react';

function AuthNavigation() {
  return (
    <nav className="w-full bg-gray-100 shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-center">
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="text-gray-800 hover:text-blue-600 font-semibold transition-colors duration-200"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              className="text-gray-800 hover:text-blue-600 font-semibold transition-colors duration-200"
            >
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default AuthNavigation;
