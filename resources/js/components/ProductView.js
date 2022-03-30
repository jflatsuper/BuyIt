import React, { useEffect, useState } from 'react';
import { Container ,Row,Col,Image,Button,ButtonGroup,Badge,Modal,FormSelect,Form } from 'react-bootstrap';
import {BsFillCartPlusFill,BsFillCartDashFill  } from "react-icons/bs";
import { useParams } from 'react-router-dom';
import img from '../../../public/img/null.jpeg'
import '../../css/app.css';


function ProductView({products,cartRem,cartUpdate,loading}){
    const {id}=useParams()
    const [product,setProduct]=useState()
    const [load,setload]=useState(false)
    const [showModal,setModal]=useState(false)
    const [showmultiple, setmultiple]=useState(null)
    const [err,setErr]=useState('')
    const handleSelect=(e)=>{
        console.log(e.target.value)
       setmultiple(e.target.value)
       setErr('')

    }
    useEffect(()=>{
        
        console.log(id)
        const pn= products.find(product=>product.id===parseInt(id)) ||null
        console.log(pn)
        setProduct(pn)
        // document.getElementById('color').value="#FFFF00"
        },[products])
    const cartfunc= async (e)=>{
        if(!showmultiple){
            return setErr('Select a size')
            
        }
        setload(true)
        const t=await cartUpdate(e,product.id,product.price,showmultiple,'plus')

        setload(t)
        
        setModal(true)
        


    }
    const handleClose=()=>{
        setModal(false)
    }
    
  
    


    return (
      
        
        !product?null:
        <>
        {/* onHide={handleClose} */}
        {/* onClick={handleClose} */}
        <Modal show={showModal} onHide={handleClose} centered >
                <Modal.Header closeButton>
                    <h4>Added <span style={{color:'yellowgreen'}}>{product.name}</span> To Cart</h4>
                </Modal.Header>
                <Modal.Body>  
                    <Col xs={10} lg={10} >
                        <Row style={{height:'100px'}}>
                            <Col style={{height:'100%'}} lg={4}  xs={6}>
                                <Image src={img} thumbnail style={{height:'90%',width:'100%',objectFit:'cover'}}/>

                            </Col>
                            <Col lg={6} xs={6}>
                                <Row xs={1} lg={1}>
                                    <Col xs={12}>
                                        <b><p><span style={{width:'100%',overflowY:'clip',textOverflow:'ellipsis',whiteSpace:'nowrap',float:'left'}}>{product.name}</span><span >&#8358;{product.price}</span></p></b>
                                        
                                    </Col>
                                </Row>
                            </Col>
                            
                        </Row>
                        
                        
                    </Col>
            </Modal.Body>
                
        </Modal>
        <Container fluid className='mt-3'  style={{minHeight:'90vh'}} >
            <Row xs={1} lg={2} md={1} className='g-4 mx-0 d-flex align-items-center justify-content-center' style={{minHeight:'90vh'}}>
                <Col   >
                <Image width="100%" style={{height: "50vh",objectFit: "cover"}} className="" src={img} loading="lazy"/>
                </Col>
                <Col >
                
                    <h3 >{`${product.name}`.toUpperCase()}</h3>
                    <p>{product.description}</p>
                    {/* <p><input type='color' disabled id='color' /></p> */}
                    <p style={{color:`${product.color}`}}>{`${product.color}`.toUpperCase()}</p>
                    <p>&#8358; {product.price}</p>
                   
                    <hr/>
                    <FormSelect className='selectsize' id='select' defaultValue='0'  autoFocus={false} style={{outlineColor:'transparent',border:'0',backgroundColor:'transparent' }} onChange={handleSelect}>

                            <option value='0' disabled >Select a size</option>
                            {product.large?<option className="py-2" value="large">Large</option>:null}
                            {product.medium?<option  className="py-2" value="medium">Medium</option>:null}
                            {product.small?<option  className="py-2" value="small">Small</option>:null}
                    </FormSelect>
                    <hr/>
                    <div className='d-block invalid-feedback text-center'>
                        {err}

                    </div>
                    
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
        </>

    )

}

export default ProductView;