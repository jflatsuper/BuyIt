import React, { useEffect, useState } from 'react'
import { Card,Row,Col,Image,Container} from 'react-bootstrap'
import { useParams } from 'react-router'
import ReactStars from 'react-rating-stars-component'
import { random } from 'lodash'
import { Link } from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'
import img from '../../../public/img/null.jpeg'
export default function ViewOrder({orders}){
    const {id}=useParams()
    const [singleOrder,setSingle]=useState({})
    useEffect(()=>{
      
        const f= orders.find(t=>t.trans_id===parseInt(id))
        console.log(f)
        setSingle(f)
        console.log(singleOrder)


    },[orders])
    return(
        <>
        <br/>
        <p className='text-center'>Status: {singleOrder?.completed?<span className='text-success'>Completed</span>:<span className='text-danger'>Pending</span>}</p>
     
        <Container  >
            {
                singleOrder?.products?.map(product=>(
                    
                    <Card key={product.id} className="shadow my-2  rounded">
                
                    <Card.Body >
                        <Row style={{width:'100%'}}>
                            <Col lg={11} xs={10}>
                                <Row style={{height:'100px'}}>
                                    <Col style={{height:'100%'}} lg={2}  xs={6}>
                                        <Image src={img} thumbnail style={{height:'90%',width:'100%',objectFit:'cover'}}/>
    
                                    </Col>
                                    <Col xs={6} >  
                                    <p> <Link to={`/dashboard/products/${product.id}`}> <span style={{width:'100%',overflowY:'clip',textOverflow:'ellipsis',whiteSpace:'nowrap',float:'left'}}>{product.name}</span></Link></p> 
                                        <p>
                                        <span style={{width:'100%',overflowY:'clip',textOverflow:'ellipsis',whiteSpace:'nowrap',float:'left'}}>Quantity: {product.pivot.amount} </span>
                             
                                        </p>
                                        
                                        <p>
                                            Total:  &#8358;{product.pivot.price}
                                                
                                        </p>
                                        {/* <ReactStars 
                                            count={5}  
                                            size={24}
                                            isHalf={true}
                                            value={random(5)}//product.rating
                                            activeColor="#ffd700"
                                            edit={true}
                                            disabled
                                        /> */}
                                    </Col>
                                </Row>
                                
                                
                            </Col>
    
                        </Row>
                        
                        </Card.Body>
                    
                </Card>
                ))}
                
        </Container>      
       
        </>
    )
    
}