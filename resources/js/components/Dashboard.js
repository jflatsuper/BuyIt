import axios from 'axios';
import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import user from "../Models/user";
import Logout from './Logout';

function Dashboard(){
    
    
    return(
        <div>
            <div>
                Hello {user.name}, you're logged in!
               {user.isLoggedIn? console.log(Boolean(user.loggedIn)):console.log('false')}

            </div>
           
            
            
        
            <div>
                <Logout />
            </div>
        </div>
    )
}
export default Dashboard;