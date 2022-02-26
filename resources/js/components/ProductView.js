import { set } from 'lodash';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

import { useParams } from 'react-router';


function ProductView(){
    const [product,setproduct]=useState({})
    const {id}=useParams()
    useEffect(()=>{
        window.axios.post("/api/showProduct",{ Pid:id }
        ).then((response)=>{
            console.log(response.data)
            setproduct(response.data)
        })


    },[])
    


    return(
        <Container>
            <h1>{product.name}</h1>
            

        </Container>

    )

}

export default ProductView;