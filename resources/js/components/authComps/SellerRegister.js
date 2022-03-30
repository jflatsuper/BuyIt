import React from 'react'
import { Link } from 'react-router-dom'
import Register from './Register'
function SellerRegister({handleRegister,callback,error}){
    return(
        <>
       
        <Register
            handleRegister={handleRegister}
            callback={callback}
            role={2}
            error={error}
        />
        
        </>
    )

}
export default SellerRegister