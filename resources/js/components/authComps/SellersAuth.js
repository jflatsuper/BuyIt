import React from 'react'
import { Container, Tab ,Tabs,Image,Nav, Navbar, NavItem, NavLink, Row,Col} from 'react-bootstrap';
import { Outlet, useLocation, useNavigate } from 'react-router';
import {LinkContainer } from 'react-router-bootstrap'
import {Link} from 'react-router-dom'
import img from '../../../../public/img/main.png'
import img2 from '../../../../public/img/like3.png'
import Login from './Login';
function SellersAuthenticationView(){
    const navigate=useNavigate()
    
    const url=useLocation()
    console.log(url)
    return (
        <>
            <Container fluid className='px-0 ' style={{minHeight:'100vh'}}>
                <Navbar  className='pb-0 pt-0 '  >
                        <Row xs={2} lg={2} md={2} style={{width:'100%',backgroundColor:'yellowgreen',paddingLeft:'4px'}} className='mx-0'>
                            <Col xs={3} lg={1} md={2}>
                                <Navbar.Brand>
                                    <Image src={img} width='70px' height='auto'/>

                                </Navbar.Brand>
                            </Col>
                            <Col xs={9} lg={11} md={10} className='px-0'>
                                <Nav fill activeKey={url.pathname}   style={{width:'100%'}} >
                                    <Row xs={2} style={{width:'100%'}} className='g-0 text-center '>
                                        <Col xs={6}> 
                                            <LinkContainer to='/seller/login'>
                                                <Nav.Link  eventKey='/seller/login' ><b>Sign in</b></Nav.Link>
                                            </LinkContainer>
                                        </Col>
                                        <Col xs={6}>
                                            <LinkContainer to='/seller/signup'>
                                                <Nav.Link eventKey='/seller/signup'><b > Start Selling</b></Nav.Link>
                                            </LinkContainer>
                                        </Col>
                                    </Row>
                                
                                
                                
                                

                                </Nav>
                            </Col>
                            
                        </Row>
            
                    
                    
                        
                    </Navbar>

        
                    
        
                <Container fluid className='d-flex align-items-center justify-content-center' style={{height:'80vh'}}>
                    <Outlet/>
                    
                </Container>
                    
                
            </Container>
            <Container fluid style={{position:'fixed',bottom:'0',backgroundColor:'yellowgreen'}} className='text-center py-2'>
                    <Image src={img2} width='auto' height='20px'/>
            </Container>

        </>

    )
}
export default SellersAuthenticationView