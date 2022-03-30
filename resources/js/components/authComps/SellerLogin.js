import React from 'react'
import Login from './Login'

function SellerLogin({handleLogin,callback,error}){
    return(
        <>
      
       
                
      
            
                <Login 
                    handleLogin={handleLogin}
                    callback={callback}
                    role={2}
                    error={error}
                />
                
        
                
            
        
        </>
    )

}
export default SellerLogin