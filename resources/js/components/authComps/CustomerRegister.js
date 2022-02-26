import React from 'react'
import Register from './Register'
function CustomerRegister({handleRegister,callback}){
    return (
        <>
        <p>this is the customer Register page</p>
        <Register
            handleRegister={handleRegister}
            callback={callback}
            role={1}
        />
        </>
    )

}
export default CustomerRegister