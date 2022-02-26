import React, { useEffect,useState } from 'react';
import { Col, Container,Stack,Row, Card, Button,Badge,ButtonGroup, ButtonToolbar,ToggleButton,ToggleButtonGroup, Image } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import {BsFillCartPlusFill,BsFillCartCheckFill,BsFillCartDashFill} from 'react-icons/bs';
import LoadingOverlay from 'react-loading-overlay'
import LoadingLogo from './LoadingLogo'
import Sidebar from './SideBar';
import {LinkContainer} from 'react-router-bootstrap'
import ImageOverlay from './ImageOverlayed';

function Products(){
    const[products,setProducts]=useState([
        
    ]);
    const[loading,setLoading]=useState(true)
    

    const cartUpdate=(e,id,price)=>{
        e.persist();
        setLoading(true)
        //Add an item to user cart( for authenticated users)
        window.axios.put("/api/addCart",{
            productId:id,
            price:price

        }).then((response)=>{
            console.log(response.data)
            let updatedproduct=products.map(product=>{
                return product.id===id?response.data      
                :product;   
             })
             console.log(updatedproduct)

           setProducts(updatedproduct)
           setLoading(false)

        })

    }
    const cartRem=(e,id)=>{
        e.persist();
        setLoading(true)
        //Remove an item from user cart( for authenticated users)
        window.axios.put("/api/remCart",{
            productId:id
        }).then((response)=>{
            console.log(response.data)
            if(response.data){
            let updatedproduct=products.map(product=>{
                return product.id===id?response.data      
                :product;   
                
             })
             setProducts(updatedproduct)
             }

             

           
           setLoading(false)

        })

    }
    
    useEffect(()=>{
        window.axios.get("/api/products").then(response=>{
            setProducts(response.data);
            setLoading(false)
            console.log(response.data);
        })

    },[]);
   
    return(
        <>
        <LoadingOverlay
        active={loading}
        spinner={<LoadingLogo/>}
        
        >
            <Container fluid className="col-sm-12 "  expand="expand" >
                <Row  className="col-sm-12" style={{height:"100vh"}} >
                    {/* <Col className=" h-100 col-sm-2"  >
                        <Sidebar />
                        
                    </Col> */}
                    <Col fill className="  col-sm-12" style={{height:"auto"}} >
                        <Row>
                            {//shows products for th authenticated user
                            products.map((product,index)=>(
                                
                                    <Container className="col-sm-3 text-center mt-5 " key={index}>
                                        <Card className="col-sm-12" >
                                        
                                        <CardHeader style={{backgroundColor:"#cfb732"}}><strong>{product.name}</strong></CardHeader>
                                        <LinkContainer to={`${product.id}`} >
                                            <Card.Body className="col-sm-12 m-0 p-0" style={{backgroundColor:'black'}} >
                                                <ImageOverlay
                                                
                                                    width="300px"
                                                    height="200px"
                                                    src={product.productimage}
                                                    caption={product.price}
                                                    alt='   This is it'
                                                />
                                            </Card.Body>
                                        </LinkContainer>
                                        
                                        <Card.Footer className="col-sm-12 p-0">
                                        <div className="d-grid  gap-2 ml-0">
                                        {//this  mapping function is used to get the number of items from present for
                                        // each product from the pivot table i.e amont of a prticular product being carted
                                        }
                                    
                                            <ButtonGroup   type="checkbox"className="ml-0 rounded-0">
                                                <Button onClick={(e)=>cartUpdate(e,product.id,product.price)} id="tbg-check-1" style={{backgroundColor:"#189e37"}} className="ml-0" size="lg" >
                                                <BsFillCartPlusFill color="#cfb732"/>
                                                <Badge bg="secondary">
                                                    {product.cart.map((carts)=>(
                                                        carts.pivot.amount
                                                    ))}
                                                </Badge>
                                                </Button>
                                                <Button id="tbg-check-2" size="lg" className="mr-0" style={{backgroundColor:"#f5f2d0"}}  onClick={(e)=>cartRem(e,product.id)} >
                                                <BsFillCartDashFill color="#189e37"/>
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

       
       </LoadingOverlay>
        
        </>
    )

}
export default Products;