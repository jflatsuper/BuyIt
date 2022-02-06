import React, { useEffect, useState } from 'react';
import { Navigate, Outlet, Route,Routes } from 'react-router-dom';
import user from "../Models/user";
import Logout from './authComps/Logout';
import Cart from './Cart';
import {Nav,Navbar,Container,NavDropdown,Row,Alert} from 'react-bootstrap';
import { Link, LinkContainer } from 'react-router-bootstrap';
import '../../css/active.css';


function Dashboard(){
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
            
            <Navbar className="col-lg-12 bg-warning " variant="light" expand="lg">
                <Container fluid>
                    

                    {/* Nav bar set at the top */}
                    <Navbar.Brand className="offset-lg-1" href="#home">Welcome, {user.name}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav defaultActiveKey='' fill className="me-auto col-lg-11 text-danger nav active">
                            <LinkContainer activeClassName="active1" to=''>
                                <Nav.Link  >Home</Nav.Link>
                            </LinkContainer>

                            <LinkContainer activeClassName="active2" to='products'>
                                <Nav.Link >Products</Nav.Link>
                            </LinkContainer>
                            
                            
                         
                            <NavDropdown title="Account" id="basic-nav-dropdown">
                                <LinkContainer to="profile">
                                    <NavDropdown.Item >Profile</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Divider />
                                <NavDropdown.Item >Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <LinkContainer to="cart">
                                <NavDropdown.Item >View Cart</NavDropdown.Item>
                                </LinkContainer>
                                
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Item className="offset-lg-5"><Logout/></Nav.Item>
                        
                        </Nav>
                    </Navbar.Collapse>
                   
                </Container>
            </Navbar>
            <Outlet/>
            
   </div>
   </>
    )
}
export default Dashboard;