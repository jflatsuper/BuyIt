import React, { useEffect,useState } from 'react';
import { Col, Container,Stack,Row, Card, Button,Badge,ButtonGroup } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
function Products(){
    const[products,setProducts]=useState([]);
    const onIncrement=()=>{

    }
    const onDecrement=()=>{

    }
    useEffect(()=>{
        window.axios.get("/api/products").then(response=>{
            setProducts(response.data);
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
                        {products.map((product,index)=>(
                            
                                <Container className="col-lg-3 text-center mt-5 mx-3" key={index}>
                                    <Card  >
                                    
                                    <CardHeader>{product.name}</CardHeader>
                                    <Card.Body>
                                        {product.price}
                                    </Card.Body>
                                    <Card.Footer>
                                     <Stack direction="horizontal">
                                        <ButtonGroup aria-label="Basic example">
                                        <Button variant="secondary">+</Button>
                                        <Button variant="primary">0</Button>
                                        <Button variant="secondary">-</Button>
                                        </ButtonGroup>
                                      </Stack>
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