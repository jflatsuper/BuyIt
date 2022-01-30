import axios from 'axios';
import { replace } from 'lodash';
import React, { useState } from 'react';
import { Navigate, useNavigate,Route, useLocation } from 'react-router-dom';
import user from "../Models/user";

function Login({history,location}){
    const [credentials,useCredentials]=useState({
        email: "",
        password: "",
    });
    const onInputChange=(e)=>{
       
        const currvalue=e.target.value;
        useCredentials({
            ...credentials,
            [e.target.name]:currvalue,
           
        });



    };
   
    const navigate=useNavigate();
    
    const authenticatedCallback = () => {
        navigate('/dashboard',{replace:true})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        window.axios.post('/api/login',credentials).then(
            (response)=>{
                user.authenticated(response.data, authenticatedCallback)
               } )
    };
    return (
        <div className="card container">
            <div className="card-header">
                <h1>
                    Login
                </h1>

            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email Address: </label>
                        <input type="email" name="email" id="email" value={credentials.email} onChange={onInputChange} autoFocus required/>
                        <div>
                            <span className="error"></span>
                        </div>

                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <input type="password" name="password" id="password" value={credentials.password} onChange={onInputChange} autoFocus required/>

                    </div>
                    <div>
                        <button type="submit" className="btn btn-cyan" >Login</button>

                    </div>

                </form>
                

            </div>

        </div>
    )
}
export default Login;