import React from 'react'
import Login from './Login'
import {Link} from 'react-router-dom'
function CustomerLogin({handleLogin,callback}){
    return(
        <>
        <p> this is the customer login page</p>
        <Link to="/seller/signup">Become a seller</Link>
        <Login
            handleLogin={handleLogin}
            callback={callback}
            role={1}
        />

        </>
    )
}
export default CustomerLogin