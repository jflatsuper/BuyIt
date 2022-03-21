import React, { useEffect, useState } from 'react'
import { Col, Container,Stack,Row, Card, Button,Badge,ButtonGroup, ButtonToolbar,ToggleButton,ToggleButtonGroup, Image,Tab, Tabs, Carousel, CarouselItem, FormSelect } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import {BsFillCartPlusFill,BsFillCartCheckFill,BsFillCartDashFill} from 'react-icons/bs';
import LoadingOverlay from 'react-loading-overlay'
import LoadingLogo from './LoadingLogo'
import Sidebar from './SideBar';
import {LinkContainer} from 'react-router-bootstrap'
import ImageOverlay from './ImageOverlayed';
import img from '../../../public/img/null.jpeg'
const GenProduct=({loading,products})=>{
    const [prod,setProd]=useState([])
    const [type,settype]=useState([])
    const [sex,setSex]=useState([])
    const [color,setColor]=useState([])
    
    const [filterval,setfilterval]=useState([])
    useEffect(()=>{
        setProd(products)
        
        settype([...(new Set(products.map(t=>t.type)))])
        setSex([...(new Set(products.map(t=>t.gender)))])
        setColor([...(new Set(products.map(t=>t.color)))])
        
        

    },[products])
    const filter=(e)=>{
        const value=e.target.value.split(',');
        console.log(value)
        let set=new Set(filterval)
        // const x=filterval.find(t=>t[0].toLowerCase()==='type')
        // console.log(x)
        set.add(value[0])
        console.log(set)
        setfilterval([...set])
        console.log(filterval)
        console.log(products.filter(product=>product[value[0]]===value[1]))
        setProd(products.filter(product=>product[value[0]]===value[1]))

    }
    const sort=()=>{
      
        setProd(products.sort((a,b)=>{
            if(a.price>b.price){
                return -1
            }
            if(a.price<b.price){
                return 1
            }
            return 0

        }))

    }
   return(
    <>
    
   
     <LoadingOverlay
     
       active={loading}
       className="px-0" 
       
       spinner={<LoadingLogo/>}>
          
       <Container fluid className="col-sm-12  px-0"  expand="expand" >
           <Container fluid className="col-sm-12 mx-0 g-0 " style={{marginLeft:'0'}} >
               {/* <Col className=" h-100 col-sm-2"  >
                   <Sidebar />
                   
                   
               </Col> */}
               <Container className="col-sm-12 py-1 " style={{backgroundColor:'lemonchiffon',color:'lemonchiffon',height:'auto'}}  >
                   {/* <Row xs={1} md={1} lg={1}> */}
                    {/* <Col className='align-items-center text-center'>
                   <ButtonGroup  type="checkbox"className="ml-0 rounded-0 col-sm-12">
                       <Button style={{backgroundColor:'lemonchiffon'}} id="tbg-check-1" size="lg" className="mr-0">Man</Button>
                       <Button style={{backgroundColor:'red'}}  id="tbg-check-2" size="lg" className="mr-0">Woman</Button>
                       <Button  style={{backgroundColor:'green'}} id="tbg-check-3" size="lg" className="mr-0">Unisex</Button>
                   </ButtonGroup>
                   
                   </Col> */}
                   {/* <Col> */}
                   <Row xs={3} md={3} lg={3} className='g-1 mx-1 '>
                       <Col >
                           <FormSelect className=""  onChange={filter}>
                           <option>Type</option>
                               
                               {type.map(type00=>(
                                   <option key={type00} value={['type',type00]} >{type00}</option>
                               ))}
                               
                               
                           </FormSelect>
                       </Col>
                       <Col >
                           <FormSelect onChange={filter}>
                               <option>Color</option>
                               {color.map(single=>(
                                   <option key={single} value={['color',single]}>{single}</option>
                               ))}
                              
                           </FormSelect>
                       </Col>
                       <Col >
                           <FormSelect onChange={sort}>
                               <option>Price</option>
                               
                               <option>Highest to lowest</option>
                               <option>Lowest to highest</option>
                           </FormSelect>
                       </Col>

                   </Row>
                   
                   
                   
                   {/* </Col></Row> */}

               </Container>
              
                   <Row xs={1} md={3} lg={4} className='g-4 px-0 mx-0'>
                       {//shows products for th authenticated user
                       prod.map((product,index)=>(
                           
                               <Col className=" text-center mt-5 " key={index}>
                                   <LinkContainer to={`${product.id}`}>
                                   <Card className="col-sm-12 " style={{border:'1px solid yellowgreen' }} >

                                   
                                   {/* <CardHeader style={{backgroundColor:"#cfb732"}}><strong>{product.name}</strong></CardHeader> */}
                                   
                                       <Card.Body className="col-sm-12 m-0 p-0" style={{backgroundColor:'transparent'}} >
                                           
                                            <ImageOverlay
                                            
                                                width="300px"
                                                height="300px"
                                                name={product.name}
                                                src={img}
                                                caption={product.price}
                                                alt='   This is it'
                                                desc={product.description}
                                            />
                                           
                                           
                                       </Card.Body>
                                   
                                   
                                   <Card.Footer className="col-sm-12 p-0">
                                   <div className="d-grid  gap-2 ml-0">
                                  
                               
                                   </div>
                                   
                                   
                                   
                                       </Card.Footer>
                                     

                               </Card>  
                               </LinkContainer>  
                               </Col>
                       ))}
                   </Row>
            
       

           </Container>
       
       </Container>
   </LoadingOverlay>

  

   
   </>

   ) 

}
export default GenProduct