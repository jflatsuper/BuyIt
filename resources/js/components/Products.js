import React, { useEffect,useState } from 'react';
import { Col, Container,Stack,Row, Card, Button,Badge,ButtonGroup, ButtonToolbar,ToggleButton,ToggleButtonGroup } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import {BsFillCartPlusFill,BsFillCartCheckFill,BsFillCartDashFill} from 'react-icons/bs';
function Products(){
    const[products,setProducts]=useState([]);
    

    const cartUpdate=(e,id)=>{
        e.persist();
        //Add an item to user cart( for authenticated users)
        window.axios.put("/api/addCart",{
            productId:id
        }).then((response)=>{
            console.log(response.data);
            console.log(id);

        })

    }
    const cartRem=(e,id)=>{
        e.persist();
        //Remove an item from user cart( for authenticated users)
        window.axios.put("/api/remCart",{
            productId:id
        }).then((response)=>{
            console.log(response.data);
        })

    }
    useEffect(()=>{
        window.axios.get("/api/products").then(response=>{
            setProducts(response.data);
            console.log(response.data);
        })

    },[]);
    return(
        <>
        <Container fluid className="col-lg-12" expand="expand">
            <Row className="col-lg-12" style={{height:"100vh"}} >
                <Col className="bg-success h-100 col-lg-2" >
                    
                    
                </Col>
                <Col className="offset-lg-1 mt-5 col-lg-9" style={{height:"auto"}}>
                    <Row>
                        {//shows products for th authenticated user
                        products.map((product,index)=>(
                            
                                <Container className="col-lg-3 text-center mt-5 mx-3" key={index}>
                                    <Card className="col-lg-12" >
                                    
                                    <CardHeader>{product.name}</CardHeader>
                                    <Card.Body>
                                        {product.price}
                                    </Card.Body>
                                    <Card.Footer className="col-lg-12 p-0">
                                    <div className="d-grid  gap-2 ml-0">
                                    {//this  mapping function is used to get the number of items from present for
                                    // each product from the pivot table i.e amont of a prticular product being carted
                                    }
                                   
                                        <ButtonGroup   type="checkbox"className="ml-0 rounded-0">
                                            <Button onClick={(e)=>cartUpdate(e,product.id)} id="tbg-check-1" className="ml-0" size="lg" >
                                            <BsFillCartPlusFill/>
                                            <Badge bg="secondary">
                                                {product.cart.map((carts)=>(
                                                     carts.pivot.amount
                                                ))}
                                            </Badge>
                                            </Button>
                                            <Button id="tbg-check-2" size="lg" className="btn-secondary mr-0"  onClick={(e)=>cartRem(e,product.id)} >
                                            <BsFillCartDashFill/>
                                            </Button>
                                        
                                        </ButtonGroup>
                                 
                                    </div>
                                      
                                     
                                    
                                        </Card.Footer>

                                </Card>    
                                </Container>
                        ))}
                    </Row>
                </Col>
           

            </Row>
           
        </Container>

        </>
    )

}
export default Products;