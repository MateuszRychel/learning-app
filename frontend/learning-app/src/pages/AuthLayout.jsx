import { Outlet } from 'react-router-dom';
import AuthNavigation from '../components/AuthNavigation';

function AuthLayout() {
  return (
    <>
      <AuthNavigation />
      <Outlet />
    </>
  );
}

export default AuthLayout;
