import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { useParams } from 'react-router'
import ReactStars from 'react-rating-stars-component'
import { random } from 'lodash'
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
        <h1>Order #{id}</h1>
        <div>
        {singleOrder?.products?.map(product=>(
            <Card key={product.id}>
                <Card.Header>{product.name}</Card.Header>
                <Card.Body>
                    <p>Number :{product.pivot.amount}</p>
                    <p>Price : {product.pivot.price}</p>
                    <ReactStars 
                        count={5}  
                        size={24}
                        isHalf={true}
                        value={random(5)}//product.rating
                        activeColor="#ffd700"
                        edit={true}
                        disabled
                    />
                </Card.Body>


            </Card>
        ))}
        </div>
       
        </>
    )
    
}