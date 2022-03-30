import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap'
import {BsMenuButton,BsX} from 'react-icons/bs'
import React from 'react'
import Logout from './authComps/Logout'
import {Link} from 'react-router-dom'
import { Outlet } from 'react-router'
import {LinkContainer} from 'react-router-bootstrap'
import img from '../../../public/img/main.png'
function SideBar(){
//     <script>
//     let sidebar=document.querySelector('#sidebar')
//     let toggle=document.querySelector('#toggle')
//     sidebar.style.display='none'
//     function openNav(){
        
//         sidebar.style.width='250px'
//         sidebar.style.display='block'
//         toggle.style.display='none'

    

//     }
//     function closeNav(){
//         sidebar.style.display='none'
//         toggle.style.display='inline-block'

//     }
    
    


// </script>
const sidebar=document.querySelector('#sidebar')
const togButton=document.querySelector('#toggle')

    const openNav=(e)=>{
        console.log(e)
        togButton.style.display="none"
        sidebar.style.display='block'

        

    }
    const closeNav=(e)=>{
        console.log(e)
        togButton.style.display="inline-block"
        sidebar.style.display='none'

    }
    return(
        <>
            
                {/* <Container className="py-4">
                    <BsMenuButton size="24" color='yellowgreen' id="toggle" onClick={openNav}/>
                    
                </Container> */}
                    <Navbar collapseOnSelect sticky="top" className="bg-light">
                        <Container>
                            <LinkContainer to="/seller/dashboard/inventory">
                                <Navbar.Brand>
                                    <Image src={img} width="70px"/>
                                </Navbar.Brand>
                            </LinkContainer>
                            
                            <BsMenuButton size="24" color='yellowgreen' id="toggle" onClick={openNav}/>

                        </Container>
                        
                        
                            
                        
                     
                            <Nav  className="flex-column"  style={{backgroundColor:'yellowgreen',position:'fixed',top:'0',bottom:'0',right:'0',zIndex:'999',overflowY:'scroll',width:'250px',display:'none',paddingLeft:'0'}} id='sidebar'  >
                                <Nav.Item className="px-4 pb-4" >

                                    <Nav.Link style={{float:'right',color:'black'}} onClick={closeNav}><BsX size='24'/></Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="px-4 py-4">
                                    <LinkContainer to='addproducts'>
                                        <Nav.Link onClick={closeNav}>New</Nav.Link>
                                    </LinkContainer>
                                    
                                       
                                    
                                </Nav.Item>
                                <Nav.Item className="px-4 py-4">
                                    <LinkContainer to='inventory'>
                                        <Nav.Link onClick={closeNav}>All Products</Nav.Link>
                                    </LinkContainer>
                                    
                                      
                                    
                                </Nav.Item>
                                <Nav.Item className="px-4 py-4">
                                    <Nav.Link>Profile</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="px-4 py-4">
                                    <Nav.Link>Complaint</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="px-4 py-4" style={{float:'right',color:'black'}} >
                                    <Logout/> 
                                </Nav.Item>

                            </Nav>

                       
                    </Navbar>
               
                    
          
                
            
            <Container className="py-4">
                <Outlet/>
            </Container>

        </>

    )
}
export default SideBar






    
    
    

