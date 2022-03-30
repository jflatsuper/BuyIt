import React, { useEffect, useState } from 'react';
import { Navigate, Outlet, Route,Routes, useNavigate, useSearchParams } from 'react-router-dom';
import user from "../Models/user";
import Logout from './authComps/Logout';
import Cart from './Cart';
import {Nav,Navbar,Container,NavDropdown,Row,Alert,InputGroup,FormControl,Button,ButtonGroup, NavItem,Dropdown} from 'react-bootstrap';
import { Link, LinkContainer } from 'react-router-bootstrap';

import '../../css/active.css';
import '../../css/app.css';
import img from '../../../public/img/main.png'
import { useLocation } from 'react-router';

function Dashboard({buyer}){
    const [show, setShow] = useState(false);
    const [query,setQuery]=useState('')
    const [buy,setbuy]=useState({
        date_of_birth:'1'
    })
    const[search, setSearch]=useState("")
    const[dropdown,setDrop]=useState(false)
    const [searchitems,setItems]=useState([])
    const url=useLocation()
    useEffect(()=>{
        if(buyer){
            setbuy({
                date_of_birth:buyer.date_of_birth
            })

        }
        

    },[buyer])
    
    
    
    const navigate=useNavigate()
    
    const showDropdown = (e)=>{
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }
  
 

    const toggleDropdown = () => setDrop(true)
    const searchIt=(e)=>{
        if(!search){
            return 0;
        }
        e.preventDefault()
        navigate(`products?searched=${search}`)
        
        
        
     
       

    }

    const onInputChange=(e)=>{
        setSearch(e.target.value)
        
        console.log(dropdown)
        window.axios.post("/api/searchproducts",{
            var:search
        }).then((response)=>{
            console.log(search)
            console.log(response.data)
            setItems(response.data)
            if(searchitems.length>=2){
                toggleDropdown()
            }else(
                setDrop(false)
            )
           
        })

    }
    

    
    
    
    return(
        <>
        <div>
        {buy?.date_of_birth?null:
        <Alert variant="warning"  className="col-lg-12 text-center mb-0" dismissible>
            
                <h5 className="col-lg-12">
                    <Row>
                    <LinkContainer to="profile" >
                            <Nav.Link>Add you Date of Birth and Address to qualify for special discounts.
                                Click here
                            </Nav.Link>
                        
                        </LinkContainer>
                    </Row>
                </h5>
         </Alert>}
         
            <Navbar sticky="top" collapseOnSelect className=" col-sm-12 py-0 " variant="light" expand="sm" style={{backgroundColor:"yellowgreen"}}>
                <Container style={{}} >
                    

                    {/* Nav bar set at the top */}
                    <LinkContainer to ='/dashboard'>
                        <Navbar.Brand className="  col-sm-1" >
                            <img width="70px" height="auto"  className="img-responsive" src={img}  alt="logo" />
            
                            {/* <img
                                src={img}
                                width=""
                            
                                
                                alt="logo"
                            /> */}
                        </Navbar.Brand>
                    </LinkContainer>
                   
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav activeKey={url.pathname} fill className=" col-sm-12 active" style={{backgroundColor:''}}>
                            <LinkContainer activeClassName="active1" to=''>
                                <Nav.Link  eventKey="/dashboard"  >Home</Nav.Link>
                            </LinkContainer>

                            <LinkContainer activeClassName="active2" to='products'>
                                <Nav.Link eventKey="/dashboard/products" >Shop</Nav.Link>
                            </LinkContainer>
                           
                            
                            
                         
                            <NavDropdown title="Account" id="basic-nav-dropdown">
                                <LinkContainer to="profile">
                                    <NavDropdown.Item >Profile</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Divider />
                                <LinkContainer to='orders'>
                                    <NavDropdown.Item >Orders</NavDropdown.Item>
                                </LinkContainer>
                                    
                                <NavDropdown.Divider />
                                <LinkContainer to="cart">
                                    <NavDropdown.Item >View Cart</NavDropdown.Item>
                                </LinkContainer>
                                
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <NavItem >
                                
                                <Row className=" col-lg-12 mx-2 " >
                                <InputGroup >
                                    <FormControl
                                        placeholder="Find...."
                                        aria-label="Search"
                                        aria-describedby="basic-addon2"
                                        name="var"
                                        value={search}
                                        
                                        id="dropdown-autoclose-outside"
                                        autoComplete="false"
                                        onChange={onInputChange}
                                    />
                                    <Button style={{backgroundColor:"black"}} type="submit" id="button-addon2" onClick={searchIt}    > 
                                        Search
                                    </Button>
                                    </InputGroup>

                                </Row>
                                   
                                <Row className=" col-lg-12 mx-2" >
                                        <Dropdown   >
                                            <Dropdown.Menu style={{width:'100%'}} show={dropdown} rootCloseEvent="click"  >
                                                { searchitems.length<1? "":searchitems.map((searchItem,index)=>(
                                                    <>
                                                    <LinkContainer to={`products/${searchItem.id}`}>
                                                        <Dropdown.Item key={index} href="#" style={{width:'100%'}}>{searchItem.name}</Dropdown.Item>
                                                    </LinkContainer>
                                                    
                                                    
                                                    </>
                                                    

                                                ))
                                                }
                                            
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Row>
                                    
                                    
                                
                                
                                {/* <Form className="d-flex"> */}
        {/* <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form> */}

                            </NavItem>
                            
                            <Nav.Item ><div style={{width:'100%'}}><span style={{float:'right'}}><Logout /></span> </div></Nav.Item>
                        
                        </Nav>
                    </Navbar.Collapse>
                   
                </Container>
            </Navbar>
            <Container style={{backgroundColor:'rgba(34,41,5,0.1)',minHeight:"100vh",height:'auto'}} fluid >
            <Container style={{minHeight:"100vh",height:'auto'}} ><Outlet /></Container>
             
            </Container>    
      
           
            
            
            
   </div>
   </>
    )
}
export default Dashboard;