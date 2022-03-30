import React from 'react'
import { Container,Image,Nav, Navbar, Row,Col} from 'react-bootstrap';
import { Outlet, useLocation, useNavigate } from 'react-router';
import {LinkContainer } from 'react-router-bootstrap'

import img from '../../../../public/img/main.png'
import img2 from '../../../../public/img/like3.png'

function AuthenticatedTabView(){
    const navigate=useNavigate()
    
    const url=useLocation()
    console.log(url)
    return(
        <>
            <Container fluid className='px-0 ' style={{minHeight:'100vh'}}>
                
                
                {/* <Tabs fill className='' defaultActiveKey='login' transition={false}>
                    <Tab title='Login'  eventKey='login'></Tab>
                    <Tab title='Register' eventKey='register' onClick={e=>{navigate(to='/auth/signup')}}></Tab>
                </Tabs> */}
                {/* <Navbar>
                    <Navbar.Brand className="col-lg-1">
                        <Image src={img} width='70px' height='auto'/>
                    </Navbar.Brand>
                    <Nav fill className='col-sm-12'>
                        <NavItem>
                            <NavLink>one</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>two</NavLink>
                        </NavItem>
                    </Nav>

                </Navbar> */}
                <Navbar  className='pb-0 pt-0 '  >
                    <Row xs={2} lg={2} md={2} style={{width:'100%',backgroundColor:'yellowgreen',paddingLeft:'4px'}} className='mx-0'>
                        <Col xs={3} lg={1} md={2}>
                            <Navbar.Brand>
                                <Image src={img} width='70px' height='auto'/>

                            </Navbar.Brand>
                        </Col>
                        <Col xs={9} lg={11} md={10} className='px-0'>
                            <Nav fill  activeKey={url.pathname}   style={{width:'100%'}} >
                                <Row xs={2} style={{width:'100%'}} className='g-0 text-center '>
                                    <Col xs={6}> 
                                        <LinkContainer to='/auth/login'>
                                            <Nav.Link  eventKey='/auth/login' ><b>Sign in</b></Nav.Link>
                                        </LinkContainer>
                                    </Col>
                                    <Col xs={6}>
                                        <LinkContainer to='/auth/signup'>
                                            <Nav.Link eventKey='/auth/signup'><b > Sign Up</b></Nav.Link>
                                        </LinkContainer>
                                    </Col>
                                </Row>
                            
                            
                            
                            

                            </Nav>
                        </Col>
                        
                    </Row>
        
                   
                
                    
                </Navbar>
                
           
                    {/* <Link to="/seller/signup">Become a seller</Link> */}

                
                <Container fluid className='d-flex align-items-center justify-content-center' style={{height:'80vh'}}><Outlet/></Container>
                
            
            </Container>
            <Container fluid style={{position:'fixed',bottom:'0',backgroundColor:'yellowgreen'}} className='text-center py-2'>
                <Image src={img2} width='auto' height='20px'/>
            </Container>
            {/* <Tab.Content>
        <Tab.Pane eventKey="login">
          <Login/>
        </Tab.Pane>
        <Tab.Pane eventKey="register">
          <p>second</p>
        </Tab.Pane>
      </Tab.Content> */}
            
        </>
        

    )
}
export default AuthenticatedTabView