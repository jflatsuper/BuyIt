import React from 'react'
import Login from './Login'
import {Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function CustomerLogin({handleLogin,callback,error}){
    return(
        <>
        
        
        <Login
            handleLogin={handleLogin}
            callback={callback}
            error={error}
            role={1}
        />

        </>
    )
}
export default CustomerLogin