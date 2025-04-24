import { Outlet } from 'react-router-dom';
import AuthNavigation from '../components/AuthNavigation';
import React from 'react';

function AuthLayout() {
  return (
    <>
      <AuthNavigation />
      <Outlet />
    </>
  );
}

export default AuthLayout;
