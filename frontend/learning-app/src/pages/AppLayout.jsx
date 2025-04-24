import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import React from 'react';

function AppLayout() {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
}

export default AppLayout;
