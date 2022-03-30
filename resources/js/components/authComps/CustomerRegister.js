import React from 'react'
import Register from './Register'
function CustomerRegister({handleRegister,callback,error}){
    return (
        <>
        
        <Register
            handleRegister={handleRegister}
            callback={callback}
            role={1}
            error={error}
        />
        </>
    )

}
export default CustomerRegister