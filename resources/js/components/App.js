import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes,Navigate, useNavigate } from 'react-router-dom';
import CustomWrapper from './customwrapper';
import user from '../Models/user';
import Login from './authComps/Login';
import Cart from './Cart';
import Home from './Home';
import Products from './Products';
import AddProducts from'./AddProducts';
import Register from './authComps/Register';


function App() {
 
    
   
    return (
        <>
        
            <Routes>
                
                
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Register/>}/>
                <Route  path="/dashboard" element={<CustomWrapper isLoggedIn={user.isLoggedIn()} />}>
                    <Route path="cart" element={<Cart/>}/>
                    <Route path='' element={<Home/>}/>
                    <Route path='products' element={<Products/>}/>
                    

                </Route>
                <Route path="/addproducts" element={<AddProducts/>}/>
                    
              
               

            </Routes>

           
         
                        

          </>             
        
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('app'));
}
