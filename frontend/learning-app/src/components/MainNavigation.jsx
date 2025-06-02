import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  HomeIcon,
  PencilSquareIcon,
  ArrowLeftOnRectangleIcon
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Form', href: '/form', icon: PencilSquareIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function MainNavigation() {
  const location = useLocation();
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="w-full bg-gray-100 shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex space-x-8">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={classNames(
                  isActive
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-500',
                  'flex items-center space-x-1 font-semibold transition-colors duration-200'
                )}
              >
                <item.icon className="h-5 w-5" aria-hidden="true" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>

        {}
        <button
          onClick={handleLogout}
          className="flex items-center space-x-1 text-red-600 hover:text-red-800 font-semibold transition-colors duration-200"
        >
          <ArrowLeftOnRectangleIcon className="h-5 w-5" />
          <span>Wyloguj</span>
        </button>
      </div>
    </nav>
  );
}

export default MainNavigation;