import React, { useEffect, useState } from 'react'
import {Container, Card,Row, Col } from 'react-bootstrap'
import moment from 'moment'
import {Link} from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
export default function Orders({orders}){
   
  
    return (!orders?<Container style={{height:"80vh",top:'2%'}}  className='d-flex align-items-center text-center justify-content-center '>
                        <Row style={{height:"40vh",backgroundColor:'whitesmoke'}} className='d-flex align-items-center text-center justify-content-center '>
                            <Row><h1 className="">No Current Orders</h1></Row><hr/>
                            <Row><Link to='/dashboard/products'>Start Shopping</Link></Row>
                        </Row> 
                        
                        

                    </Container> 
        :
        <>
        <br/>
        {orders.map(order=>(
            <LinkContainer key={order.id}  to={`${order.trans_id}`} >
              <Card className="shadow my-2  rounded">
              <Card.Header><b><span style={{}}>{order?.completed?<span className='text-success'>Order #{order.trans_id}</span>:<span className='text-danger'>Order #{order.trans_id}</span>}</span> </b><span style={{float:'right'}}>{moment(order.created_at).fromNow()}</span></Card.Header>
                
              <Card.Body >
                  <Row style={{width:'100%'}}>
                     
                      <Col lg={11} xs={10}>
                          <Row style={{height:'100px'}}>
                              
                              <Col xs={6}>
                               
                                  <b><p><span style={{width:'100%',overflowY:'clip',textOverflow:'ellipsis',whiteSpace:'nowrap',float:'left'}}>{order.products.length} product{order.products.length>1?'s':null}</span></p></b>
                                  {/* <p>&#8358;</p> */}
                                  
                              </Col>
                          </Row>
                          
                          
                      </Col>

                  </Row>
                  
                  </Card.Body>
              
          </Card>
        </LinkContainer>
                
            
            
                // <LinkContainer key={order.id}  to={`${order.trans_id}`} >
                //         <Card >
                //         <Card.Header>Order #{order.trans_id} <span style={{float:'right'}}>{moment(order.created_at).fromNow()}</span></Card.Header>
                //         <p>{order.products.length} product(s)</p>
                //     </Card>
                //     </LinkContainer>
                

            
        ))}
        <br/>
        </>
    )
}