import React from 'react'
import { Col, Container,Stack,Row, Card, Button,Badge,ButtonGroup, ButtonToolbar,ToggleButton,ToggleButtonGroup, Image,Tab, Tabs, Carousel, CarouselItem, FormSelect } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import {BsFillCartPlusFill,BsFillCartCheckFill,BsFillCartDashFill} from 'react-icons/bs';
import LoadingOverlay from 'react-loading-overlay'
import LoadingLogo from './LoadingLogo'
import Sidebar from './SideBar';
import {LinkContainer} from 'react-router-bootstrap'
import ImageOverlay from './ImageOverlayed';
import img from '../../../public/img/null.jpeg'
const GenProduct=({loading,products,handleSpecificProduct})=>{
   return(
    <>
    <Container fluid style={{backgroundColor:'white'}} className="">
               

           </Container>
   
     <LoadingOverlay
     
       active={loading}
       
       spinner={<LoadingLogo/>}>
          
       <Container fluid className="col-sm-12 "  expand="expand" >
           <Row  className="col-sm-12 " style={{}} >
               {/* <Col className=" h-100 col-sm-2"  >
                   <Sidebar />
                   
                   
               </Col> */}
               <Row style={{backgroundColor:'lemonchiffon',color:'lemonchiffon'}}  >
                   <Col>
                   <ButtonGroup type="checkbox"className="ml-0 rounded-0">
                       <Button style={{backgroundColor:'lemonchiffon'}} id="tbg-check-1" size="lg" className="mr-0">Man</Button>
                       <Button style={{backgroundColor:'red'}}  id="tbg-check-2" size="lg" className="mr-0">Woman</Button>
                       <Button  style={{backgroundColor:'green'}} id="tbg-check-3" size="lg" className="mr-0">Unisex</Button>
                   </ButtonGroup>
                   
                   </Col>
                   <Col>
                   <Row xs={2} md={4} lg={4}>
                       <Col>
                           <FormSelect className="">
                               <option>All</option>
                               <option>Skirt</option>
                               <option>Shirt</option>
                               <option>Trouser</option>
                           </FormSelect>
                       </Col>
                       <Col>
                           <FormSelect>
                               <option>Color</option>
                               <option>Red</option>
                               <option>Orange</option>
                               <option>Yellow</option>
                               <option>Green</option>
                               <option>White</option>
                               <option>Black</option>
                               <option>Blue</option>
                               <option>Purple</option>
                           </FormSelect>
                       </Col>
                       <Col>
                           <FormSelect>
                               <option></option>
                               <option>Highest to lowest</option>
                               <option>Lowest to highest</option>
                           </FormSelect>
                       </Col>

                   </Row>
                   
                   
                   
                   </Col>

               </Row>
              
                   <Row xs={1} md={3} lg={4} className='g-4 px-0 mx-0'>
                       {//shows products for th authenticated user
                       products.map((product,index)=>(
                           
                               <Col className=" text-center mt-5 " key={index}>
                                   <Card className="col-sm-12 " >
                                   
                                   {/* <CardHeader style={{backgroundColor:"#cfb732"}}><strong>{product.name}</strong></CardHeader> */}
                                   
                                       <Card.Body className="col-sm-12 m-0 p-0" style={{backgroundColor:'black'}} onClick={(e)=>handleSpecificProduct(e,product.id)}>
                                           <ImageOverlay
                                           
                                               width="300px"
                                               height="300px"
                                               name={product.name}
                                               src={img}
                                               caption={product.price}
                                               alt='   This is it'
                                           />
                                       </Card.Body>
                                   
                                   
                                   <Card.Footer className="col-sm-12 p-0">
                                   <div className="d-grid  gap-2 ml-0">
                                   {//this  mapping function is used to get the number of items from present for
                                   // each product from the pivot table i.e amont of a prticular product being carted
                                   }
                               
                                       {/* <ButtonGroup   type="checkbox"className="ml-0 rounded-0">
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
                                       
                                       </ButtonGroup> */}
                               
                                   </div>
                                   
                                   
                                   
                                       </Card.Footer>

                               </Card>    
                               </Col>
                       ))}
                   </Row>
            
       

           </Row>
       
       </Container>
   </LoadingOverlay>

  

   
   </>

   ) 

}
export default GenProduct