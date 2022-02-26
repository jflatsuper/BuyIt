import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Logout from './authComps/Logout'
function SellerDashboard(){
    return(
        <>
        <Link to='addproducts'>Add new Products</Link>
        <Link to='inventory'>See all you products</Link>
        <Logout/>
        <p>This is the seller dashboard</p>
        <Outlet/>
        </>
    )

}
 export default SellerDashboard