import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import moment from 'moment'

import { LinkContainer } from 'react-router-bootstrap'
export default function Orders({orders}){
   
  
    return (
        <>
        <p> this is the orders page. please you can see your past and cucrrent orders here</p>
        {orders.map(order=>(
            
            
                <LinkContainer key={order.id}  to={`${order.trans_id}`} >
                        <Card >
                        <Card.Header>Order #{order.trans_id} <span style={{float:'right'}}>{moment(order.created_at).fromNow()}</span></Card.Header>
                        <p>{order.products.length} product(s)</p>
                    </Card>
                </LinkContainer>
                

            
        ))}
        </>
    )
}