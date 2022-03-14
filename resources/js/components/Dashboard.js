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

function Dashboard({handleSearch}){
    const [show, setShow] = useState(false);
    const [query,setQuery]=useState('')
    const[search, setSearch]=useState("")
    const[dropdown,setDrop]=useState(false)
    const [searchitems,setItems]=useState([])
    
    const navigate=useNavigate()
    
    const showDropdown = (e)=>{
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }
  
    const [buyer,setBuyer]=useState({
        date_of_birth:"1",
    });
    
    useEffect(()=>{
        window.axios.get('/api/basicdetails').then((response)=>{
            setBuyer({
                ...buyer,
                date_of_birth:response.data.date_of_birth});

        });
    },[]);
    console.log(buyer);
 

    const toggleDropdown = () => setDrop(true)
    const searchIt=(e)=>{
        e.preventDefault()
        handleSearch(search)
        
     
       

    }

    const onInputChange=(e)=>{
        setSearch(e.target.value)
        
        console.log(dropdown)
        window.axios.post("/api/searchproducts",{
            var:search
        }).then(async(response)=>{
            console.log(search)
            console.log(response.data)
            await setItems(response.data)
            if(searchitems.length>=2){
                toggleDropdown()
            }
           
        })

    }
    

    
    
    
    return(
        <>
        <div>
        {buyer.date_of_birth?null:
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
         
            <Navbar sticky="top"  className=" col-sm-12 pb-0 " variant="light" expand="sm" style={{backgroundColor:"yellowgreen"}}>
                <Container style={{}} >
                    

                    {/* Nav bar set at the top */}
                    <Navbar.Brand className="  col-sm-1" href="/">
                        <img width="70px" height="auto"  className="img-responsive" src={img}  alt="logo" />
           
                        {/* <img
                            src={img}
                            width=""
                           
                            
                            alt="logo"
                        /> */}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav defaultActiveKey='' fill className=" col-sm-12 active" style={{backgroundColor:''}}>
                            <LinkContainer activeClassName="active1" to=''>
                                <Nav.Link  >Home</Nav.Link>
                            </LinkContainer>

                            <LinkContainer activeClassName="active2" to='products'>
                                <Nav.Link >Shop</Nav.Link>
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
                                <InputGroup >
                                    <FormControl
                                    placeholder="Find...."
                                    aria-label="Search"
                                    aria-describedby="basic-addon2"
                                    name="var"
                                    value={search}
                                    id="dropdown-autoclose-outside"
                                    autoComplete="false"
                                    onClick={(e) => {toggleDropdown()
                                      }}
                                    
                                    onChange={onInputChange}
                                    />
                                    <Dropdown className=" col-sm-12  mx-2"  >
                             

                                        <Dropdown.Menu  className=" col-sm-12" show={dropdown} rootCloseEvent="click" >
                                            { searchitems.length<1? "":searchitems.map((searchItem,index)=>(
                                                <>
                                                
                                                <Dropdown.Item key={index} href="#" style={{width:'100%'}}>{searchItem.name}</Dropdown.Item>
                                                
                                                </>
                                                

                                            ))
                                            }
                                        
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Button style={{backgroundColor:"black"}} type="submit" id="button-addon2" onClick={searchIt}   > 
                                    Search
                                    </Button>
                                </InputGroup>
                                
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
                            
                            <Nav.Item className=""><span style={{float:'right'}}><Logout/></span></Nav.Item>
                        
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