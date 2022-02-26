import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
const CustomWrapper = ({ isLoggedIn,role,view }) => {
    const location = useLocation();
   
     return isLoggedIn &&role==='2' ? 
      (
       view
      )
      
     :
     <Navigate
        to={'/seller/login'}
        replace
        state={{ location }}
      />
    
  };
  export default CustomWrapper;