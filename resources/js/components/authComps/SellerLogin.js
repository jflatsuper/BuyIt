import React from 'react'
import Login from './Login'
function SellerLogin({handleLogin,callback}){
    return(
        <>
        <p>Welcome to seller login page</p>
        <Login 
            handleLogin={handleLogin}
            callback={callback}
            role={2}
        />
        </>
    )

}
export default SellerLogin