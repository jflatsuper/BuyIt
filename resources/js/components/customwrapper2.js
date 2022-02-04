import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Dashboard from './Dashboard';
const CustomWrapper2 = ({ isLoggedIn, ...props }) => {
    const location = useLocation();
    return isLoggedIn? (
      <Navigate
        to={'/dashboard'}
        replace
        state={{ location }}
      />
    
    ) : (
      <Navigate
        to={'/login'}
        replace
        state={{ location }}
      />
    )
  };
  export default CustomWrapper2;