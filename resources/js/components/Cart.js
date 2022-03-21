import React,{useEffect, useState} from 'react';
import { Card, Container,Badge,Button, FormSelect, FormCheck,Row, Col,ButtonGroup,Image } from 'react-bootstrap';
import {Link } from 'react-router-dom'
import {BsFillDashSquareFill,BsFillPlusSquareFill,BsTrash,BsTrash2,BsTrash2Fill, BsTrashFill} from 'react-icons/bs'
import Checkout from './Checkout'
import '../../css/app.css';
import img from '../../../public/img/null.jpeg'
import axios from 'axios';
function Cart({updateOrders,cartUpdate}){
    const [carted,setCart]=useState([]);
    const [loads,setloads]=useState(false)
   
    const cartfunc= async (e,id,price,action)=>{
        let x=1
        setloads(true)
        const t=await cartUpdate(e,id,price,action)
        const index=carted.findIndex((product)=>product.id===id)
        if (action==='minus'){
            x=-1

        }
        
        const cartitem=carted[index]
        const newcart={
            ...cartitem,
            pivot:{
                ...cartitem.pivot,
                amount:cartitem.pivot.amount+x}}
        setCart([
            ...carted.slice(0,index),
            newcart,
           
            ...carted.slice(index+1,carted.length)

            
            
        ])
        console.log(newcart)

        setloads(t)


    }
    const remove= async (e,id)=>{
        setloads(true)
        console.log(id)
        const t=await axios.delete('/api/remove',{data:{rid:id}})
        console.log(t.data)
        if (t.data==='done'){
            setCart(carted.filter(cartitem=>cartitem.id!==id))
        }
        setloads(false)
        


    }
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
    
    async function handleSuccess (reference, checked, unchecked){
        console.log({reference:reference.reference,transid:reference.trans,checked})
        window.axios.post('/api/checkout',{reference:reference.reference,transid:reference.trans,checked})
        await setCart(unchecked)
        const f= await (updateOrders)()
        console.log(f)


    }
    useEffect(()=>{
       (addit)()

    },[]);
    const addit=async()=>{
        const response= await window.axios.get('/api/cart')
        console.log(response)
        for(const cart of response.data){
            cart.checked=true
        }
        const nnn=await setCart(response.data)
        return nnn
    }
     
       
    let total=0
    for(const cart of carted){
        if(cart.checked)total+=(cart.pivot.amount*cart.pivot.price)
       

    }
        
    
        
    
    
   return (carted.length<1 ? 
    <>
       <Container style={{height:"80vh",top:'2%'}}  className='d-flex align-items-center text-center justify-content-center '>
         <Row style={{height:"40vh",backgroundColor:'whitesmoke'}} className='d-flex align-items-center text-center justify-content-center '>
           <Row><h1 className="">Your Cart is empty....</h1></Row><hr/>
           <Row><Link to='/dashboard/products'>Start Shopping</Link></Row>
            </Row> 
            
            

        </Container> 

    </>
        
        

     :
     <>
     <br/>
     <Container >
        
         
      

            {
                carted.map((cartitem)=>(
                    <Row key={cartitem.id} xs={1}>
                        <Col>
                        <Card  className="shadow my-2  rounded">
                
                        <Card.Body >
                            <Row style={{width:'100%'}} lg={2} xs={2}>
                                <Col style={{height:'100px'}} className="d-flex align-items-center" lg={1} xs={2} >
                                    <FormCheck
                                    defaultChecked={cartitem.checked}
                                    value={cartitem.checked}
                                    id={cartitem.id}
                                    
                                    onChange={onCheck} />
                                </Col>
                                <Col xs={10} lg={10} >
                                    <Row style={{height:'100px'}}>
                                        <Col style={{height:'100%'}} lg={2}  xs={6}>
                                            <Image src={img||cartitem.productimage} thumbnail style={{height:'90%',width:'100%',objectFit:'cover'}}/>

                                        </Col>
                                        <Col lg={10} xs={6}>
                                            <Row xs={1} lg={1}>
                                                <Col xs={12}>
                                                    <b><p><span style={{width:'100%',overflowY:'clip',textOverflow:'ellipsis',whiteSpace:'nowrap',float:'left'}}>{cartitem.name}</span><span >&#8358;{cartitem.price}</span></p></b>
                                                    <p>
                                                        
                                                            <BsFillPlusSquareFill onClick={(e)=>cartfunc(e,cartitem.id,cartitem.price,'plus')} />
                                                            <span className="mx-2"> {cartitem.pivot.amount}</span>
                                                            {cartitem.pivot.amount>1?<BsFillDashSquareFill onClick={(e)=>cartfunc(e,cartitem.id,cartitem.price,'minus')}/>:<BsFillDashSquareFill style={{color:'grey'}}/>}

                                                          
                                                            <span style={{float:'right'}}><BsTrash onClick={(e)=>remove(e,cartitem.id)}style={{color:'yellowgreen'}}/></span>
                                                    </p>
                                                </Col>
                                                
                                                    
                                                
                                            </Row>
                                        
                                           
                                            
                                        </Col>
                                        
                                    </Row>
                                    
                                    
                                </Col>

                            </Row>
                    
                        </Card.Body>
            
                     </Card>
                        </Col>
                        

                    </Row>
                    
                ))}
                <br/><br/><br/>

                 <Card className='rounded '  style={{position:'fixed',width:'100%',left:'0%',right:'0%',bottom:'0%',height:'auto',backgroundColor:'yellowgreen',}}>
                    <Card.Body >
                        <Row  className='d-flex align-items-center text-center justify-content-center ' xs={1}>
                            <Col>
                                 <Checkout carted={carted} handleSuccess={handleSuccess} total={total}/> 
                            </Col>
                            
                        </Row>
                    </Card.Body>

                </Card>  
        </Container>     
    </> 
   
    )

}
export default Cart;