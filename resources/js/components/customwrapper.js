import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Dashboard from './Dashboard';
const CustomWrapper = ({ isLoggedIn, ...props }) => {
    const location = useLocation();
    return isLoggedIn? (
      <Dashboard />
    ) : (
      <Navigate
        to={'/login'}
        replace
        state={{ location }}
      />
    )
  };
  export default CustomWrapper;