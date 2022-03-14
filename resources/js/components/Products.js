import React, { useEffect,useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import GenProduct from './GenProduct'


function Products({products,handleSpecificProduct,cartUpdate,cartRem,loading,pars}){
    const [prod,setprod]=useState([])
    
   useEffect(()=>{
       if(pars.get('searched')){
       const t=products.filter(product=>(product.type.toLowerCase().includes(pars.get('searched').toLowerCase())||product.name.toLowerCase().includes(pars.get('searched').toLowerCase())))
       setprod(t)

       }
       else{
        setprod(products)
       }
   },[pars,products])
    
    
    // <LoadingOverlay
    //     active={loading}
    //     spinner={<LoadingLogo/>}>
    // </LoadingOverlay>
    

    
    return(
        <GenProduct
            loading={loading}
            products={prod}
            handleSpecificProduct={handleSpecificProduct}
        />
        
    )

}
export default Products;