import React, { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import Home from './pages/Home';
import Form from './pages/Form';
import Login from './pages/Login';
import Register from './pages/Register';
import Test from './pages/Test';
import TestResults from './pages/TestResults';

import AppLayout from './pages/AppLayout';
import AuthLayout from './pages/AuthLayout';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  useEffect(() => {
    const handleStorage = () => {
      setIsLoggedIn(!!localStorage.getItem('token'));
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: isLoggedIn ? <AppLayout /> : <AuthLayout />,
      children: isLoggedIn
        ? [
          { path: '/', element: <Home /> },
          { path: '/form', element: <Form /> },
          { path: '/test/:id', element: <Test /> },
          { path: '/results', element: <TestResults /> },
        ]
      : [
          { path: '/', element: <Login /> },
          { path: '/register', element: <Register /> },
        ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;