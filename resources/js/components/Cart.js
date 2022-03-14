import React,{useEffect, useState} from 'react';
import { Card, Container,Badge,Button, FormSelect, FormCheck,Row, Col } from 'react-bootstrap';
import Checkout from './Checkout'
import '../../css/app.css';
function Cart({updateOrders}){
    const[carted,setCart]=useState([]);
   
    
    const onCheck=(e)=>{
       
        const id=parseInt(e.target.id)
        const newval=e.target.checked?true:false
        console.log(newval)
        
        const index=carted.findIndex((product)=>product.id===id)
        
        const cartitem=carted[index]
        const newcart={
            ...cartitem,
            checked:newval
        }
        setCart([
            ...carted.slice(0,index),
            newcart,
           
            ...carted.slice(index+1,carted.length)

            
            
        ])


    }
    // {
    //     ...product,
        
    //     [e.target.name]:e.target.type==="checkbox"?e.target.checked?true:false:currvalue
    // }
    
    console.log(carted)
    async function handleSuccess (reference, checked, unchecked){
        console.log({reference:reference.reference,transid:reference.trans,checked})
        window.axios.post('/api/checkout',{reference:reference.reference,transid:reference.trans,checked})
        await setCart(unchecked)
        const f= await (updateOrders)()
        console.log(f)


    }
    useEffect(()=>{
        window.axios.get('/api/cart').then(async (response)=>{
            console.log(response.data)
            console.log("notinf")
            //adds a checkbox to each product in the cart
            for(const cart of response.data){
                cart.checked=true
            }
            await setCart(response.data)
            console.log(response.data)
            
        })
        

    },[]);
     
       
    let total=0
    for(const cart of carted){
        if(cart.checked)total+=(cart.pivot.amount*cart.pivot.price)
       

    }
        
    
        
    
    
   return (carted.length<1 ? 
        <Container style={{height:"100%"}} fluid>
            <h1 className="align-items-center text-center">Your Cart is empty</h1>

        </Container>
        

     : <Container>
            {
                carted.map((cartProduct)=>(
                    
                    <Row key={cartProduct.id} >
                        {console.log(cartProduct)}
                        <Col className='col-sm-1'>
                            <FormCheck
                            defaultChecked

                             value={cartProduct.checked}
                             id={cartProduct.id}
                             name='checked' 
                             type='checkbox'
                             onChange={onCheck} 
                             />
                        </Col>
                        <Col className='col-sm-10'>
                            <Card  className="col-lg-12 mt-5 mb-5">
                                <Card.Header>{cartProduct.name}</Card.Header> 
                                <Card.Body>
                                    <p>{cartProduct.type}<Badge> {cartProduct.pivot.amount}</Badge></p>
                                    
                                </Card.Body>

                            </Card>
                        </Col>
                       

                    </Row>
                    

                ))}
                <Checkout carted={carted} handleSuccess={handleSuccess} total={total}/>
                

            
        </Container>
    )

}
export default Cart;