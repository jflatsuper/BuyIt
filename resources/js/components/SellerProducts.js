import { random } from 'lodash';
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader'
import ReactStars from "react-rating-stars-component";
function SellerProducts(){
    const [products,setproducts]=useState([])
    useEffect(()=>{
        

        window.axios.get('/api/sellerproducts').then(
            response=>{
                console.log(response)
                if(response.data){
                    setproducts(response.data)
                }
                console.log(products)
            }
        )
        
    },[])
    return (
        <>
        {products.map(product=>(
            <Card key={product.id}>
                <CardHeader>{product.name}</CardHeader>
                <Card.Body>Product{product.id} is present in {product.cart.length} Cart(s)</Card.Body>
                <Card.Footer><p> Rating: {<ReactStars 
                count={5}  
                size={24}
                isHalf={true}
                value={random(5)}//product.rating
                activeColor="#ffd700"
                edit={false}
                disabled/>} by {random(1000)} Customer(s)</p></Card.Footer>
                {/* product.no_of_ratings */}
            </Card>
            
        ))}
        </>
    )

}
export default SellerProducts