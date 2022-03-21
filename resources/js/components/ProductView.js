import React, { useEffect, useState } from 'react';
import { Container ,Row,Col,Image,Button,ButtonGroup,Badge} from 'react-bootstrap';
import {BsFillCartPlusFill,BsFillCartDashFill  } from "react-icons/bs";
import { useParams } from 'react-router-dom';
import img from '../../../public/img/null.jpeg'


function ProductView({products,cartRem,cartUpdate,loading}){
    const {id}=useParams()
    const[product,setProduct]=useState({})
    const [load,setload]=useState(false)
    useEffect(()=>{
        
        console.log(id)
        const pn= products.find(product=>product.id===parseInt(id)) ||{}
        console.log(pn)
        setProduct(pn)
        // document.getElementById('color').value="#FFFF00"
        },[products])
    const cartfunc= async (e)=>{
        setload(true)
        const t=await cartUpdate(e,product.id,product.price,'plus')

        setload(t)


    }
    
  
    


    return (
        <Container fluid className='mt-3'>
            <Row xs={1} lg={2} md={1} className='g-4 mx-0'>
                <Col   >
                <Image width="100%" style={{height: "50vh",objectFit: "cover"}} className="" src={img} loading="lazy"/>
                </Col>
                <Col >
                
                    <h3 >{`${product.name}`.toUpperCase()}</h3>
                    <p>{product.description}</p>
                    {/* <p><input type='color' disabled id='color' /></p> */}
                    <p>{`${product.color}`.toUpperCase()}</p>
                    <p>&#8358; {product.price}</p>
                    <hr/>
                    {product.large?<p>L</p>:null}
                    {product.medium?<p>M</p>:null}
                    {product.small?<p>S</p>:null}
                    <hr/>
                    
                                    <Button onClick={cartfunc} id="tbg-check-1" style={{backgroundColor:"yellowgreen",color:'black'}} className="ml-0  col-sm-4 "  xs={4} size="md" >
                                    
                                    {load?'Loading':<BsFillCartPlusFill color="#189e37"/>}
                                    <Badge bg="secondary">
                                        {/* {product.cart.map((carts)=>(
                                            carts.pivot.amount
                                        ))} */}
                                    </Badge>
                                    </Button>
                                    
                </Col>
            </Row>
            <br/>
            
             {//this  mapping function is used to get the number of items from present for
                                   // each product from the pivot table i.e amont of a prticular product being carted
                                }
                               
                                
            

        </Container>

    )

}

export default ProductView;