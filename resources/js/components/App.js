import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes,Navigate, useNavigate } from 'react-router-dom';
import CustomWrapper from './customwrapper';
import Dashboard from './Dashboard';
import user from '../Models/user';
import Login from './Login';


function App() {
 
    
   
    return (
        
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route  path="/dashboard" element={<CustomWrapper isLoggedIn={user.isLoggedIn} />}/>
               

            </Routes>

           
         
                        

                       
        
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('app'));
}
