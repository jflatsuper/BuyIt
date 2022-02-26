import React,{useEffect, useState} from 'react';
import { Card, Container,Badge } from 'react-bootstrap';
import Checkout from './Checkout'
import '../../css/app.css';
function Cart(){
    const[carted,setCart]=useState([]);
    useEffect(()=>{
        window.axios.get('/api/cart').then((response)=>{
            console.log(response.data)
            console.log("notinf")
            setCart(response.data);
            
        })
        

    },[]);
    
   return (carted.length<1 ? 
        <Container style={{height:"100%"}} fluid>
            <h1 className="align-items-center text-center">Your Cart is empty</h1>

        </Container>
        

     : <Container>
            {
                carted.map((cartProduct)=>(
                    <Card key={cartProduct.id} className="col-lg-12 mt-5 mb-5">
                    <Card.Header>{cartProduct.name}</Card.Header> 
                    <Card.Body>
                        <p>{cartProduct.type}<Badge> {cartProduct.pivot.amount}</Badge></p>
                        
                    </Card.Body>

                    </Card>

                ))}
                <Checkout/>

            
        </Container>
    )

}
export default Cart;