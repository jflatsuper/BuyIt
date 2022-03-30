import { random } from 'lodash';
import React, { useEffect, useState } from 'react'
import { Card,Row,Col } from 'react-bootstrap'
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
            <Card key={product.id} className="my-4 shadow rounded">
                
                <Card.Body>
                    <h5>
                        <strong>
                            {product.name}

                        </strong>
                            

                    

                    </h5>
                    Product{product.id} is present in {product.cart.length} Cart(s)</Card.Body>
                <Card.Footer style={{backgroundColor:'rgba(154, 205, 50,0.6)'}}>
                    <Row className="d-flex align-items-center justify-content-center" style={{height:'40px'}}>
                        <Col xs={4} lg={2}>
                            {<ReactStars 
                                count={5}  
                                size={24}
                                isHalf={true}
                                value={random(5)}//product.rating
                                activeColor="#ffd700"
                                edit={false}
                                disabled
                            />}
                        </Col>
                        {/* rgb(154, 205, 50) */}
                        <Col className="d-flex align-items-center justify-content-center" >
                            by {random(1000)} Customer(s)
                        </Col>
                    </Row>
                    </Card.Footer>
                {/* product.no_of_ratings */}
            </Card>
            
        ))}
        </>
    )

}
export default SellerProducts