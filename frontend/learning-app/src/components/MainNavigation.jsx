import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, PencilSquareIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline';
  
const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Form', href: '/form', icon: PencilSquareIcon },
  { name: 'Logout', href: '/logout', icon: ArrowLeftOnRectangleIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function MainNavigation() {
  const location = useLocation();

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-64 bg-white border-r shadow-md">
        <div className="p-4 text-xl font-bold text-gray-800">Learning app</div>
        <nav className="mt-5 space-y-1">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={classNames(
                  isActive
                    ? 'bg-gray-200 text-gray-900'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                  'group flex items-center px-4 py-2 text-sm font-medium rounded-md'
                )}
              >
                <item.icon width={50}
                  className={classNames(
                    isActive ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                    'mr-1 h-2 w-2'
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="flex-1 p-6">
      </div>
    </div>
  );
}

export default MainNavigation;