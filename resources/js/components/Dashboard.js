import React, { useEffect, useState } from 'react';
import { Navigate, Outlet, Route,Routes } from 'react-router-dom';
import user from "../Models/user";
import Logout from './authComps/Logout';
import Cart from './Cart';
import {Nav,Navbar,Container,NavDropdown,Row,Alert,InputGroup,FormControl,Button,ButtonGroup, NavItem,Dropdown} from 'react-bootstrap';
import { Link, LinkContainer } from 'react-router-bootstrap';
import '../../css/active.css';
import '../../css/app.css';
import img from '../../../public/img/main.png'




function Dashboard(){
    const [buyer,setBuyer]=useState({
        date_of_birth:"1",
    });
    const[search, setSearch]=useState("")
    const[dropdown,setDrop]=useState(false)
    const [searchitems,setItems]=useState([])
    useEffect(()=>{
        window.axios.get('/api/basicdetails').then((response)=>{
            setBuyer({
                ...buyer,
                date_of_birth:response.data.date_of_birth});

        });
    },[]);
    console.log(buyer);
 

    const toggleDropdown = () => setDrop(true)

    const onInputChange=(e)=>{
        setSearch(e.target.value)
        toggleDropdown()
        console.log(dropdown)
        window.axios.post("/api/searchproducts",{
            var:search
        }).then((response)=>{
            console.log(search)
            console.log(response.data)
            setItems(response.data)
           
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
            
            <Navbar className="col-sm-12 " variant="light" expand="sm" style={{backgroundColor:"#00g00b",borderBottom:"1px solid black"}}>
                <Container fluid>
                    

                    {/* Nav bar set at the top */}
                    <Navbar.Brand className="offset-sm-1 col-sm-1" href="#home">
                        <img
                            src={img}
                            width="70%"
                           
                            
                            alt="logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav defaultActiveKey='' fill className="me-auto col-sm-11 text-danger nav active" style={{}}>
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
                            <NavItem className="col-sm-6">
                                <InputGroup >
                                    <FormControl
                                    placeholder="Find...."
                                    aria-label="Search"
                                    aria-describedby="basic-addon2"
                                    name="var"
                                    id="dropdown-autoclose-outside"
                                    autoComplete="false"
                                    
                                    onChange={onInputChange}
                                    />
                                    <Dropdown className="d-inline col-lg-12  mx-2" autoClose={true}  >
                             

    <Dropdown.Menu   show={dropdown} >
        { searchitems.length<1? "":searchitems.map((searchItem,index)=>(
            <Dropdown.Item key={index} href="#">{searchItem.name}</Dropdown.Item>
            

        ))
        }
      
    </Dropdown.Menu>
  </Dropdown>
                                    <Button style={{backgroundColor:"#189e37"}} type="submit" id="button-addon2"> 
                                    Search
                                    </Button>
                                </InputGroup>
                                
    

                            </NavItem>
                            
                            <Nav.Item className="offset-sm-1"><Logout/></Nav.Item>
                        
                        </Nav>
                    </Navbar.Collapse>
                   
                </Container>
            </Navbar>
            
            <Container style={{backgroundColor:'thistle'}}>
             <Outlet />
            </Container>    
           
            
            
            
   </div>
   </>
    )
}
export default Dashboard;