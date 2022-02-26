import React from 'react'
import { Link } from 'react-router-dom'
import Register from './Register'
function SellerRegister({handleRegister,callback}){
    return(
        <>
        <p>Welcome to seller Registration PAGE</p>
        <Register
            handleRegister={handleRegister}
            callback={callback}
            role={2}
        />
        <Link to="/seller/login">signin</Link>
        </>
    )

}
export default SellerRegister