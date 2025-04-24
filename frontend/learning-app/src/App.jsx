import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';

import Home from './pages/Home';
import Form from './pages/Form';
import Login from './pages/Login';
import Register from './pages/Register';

import AppLayout from './pages/AppLayout';
import AuthLayout from './pages/AuthLayout';

const isLoggedIn = localStorage.getItem('token');

const router = createBrowserRouter([
  {
    path: '/',
    element: isLoggedIn ? <AppLayout /> : <AuthLayout />,
    children: isLoggedIn
      ? [
          { path: '/', element: <Home /> },
          { path: '/form', element: <Form /> },
        ]
      : [
          { path: '/', element: <Login /> },
          { path: '/register', element: <Register /> },
        ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
