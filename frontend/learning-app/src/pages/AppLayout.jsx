import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

function AppLayout() {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
}

export default AppLayout;
