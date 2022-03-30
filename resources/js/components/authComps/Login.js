import React, { useState } from 'react';
import { Card, Form, FormControl, FormGroup, FormLabel,Button,Container,Row,Col } from 'react-bootstrap';
import { Navigate, useNavigate,Route, useLocation ,Link} from 'react-router-dom';

function Login({handleLogin,callback,role,error}){
    const [credentials,useCredentials]=useState({
        email: "",
        password: "",
        role:role
    });
    //  const [error,setError]=useState('');
    const onInputChange=(e)=>{
        const currvalue=e.target.value;
        useCredentials({
            ...credentials,
            [e.target.name]:currvalue,
           
        });



    };
    return (
        <>
       
       
       
           <Row xs={1}>
               <Col xs={12} lg={12}>
               <Form onSubmit={(e)=>handleLogin(e,callback,credentials)} >
                <Card  className="shadow">
                        
                            
                        {/* <Card.Header style={{backgroundColor:'yellowgreen',color:'black'}} className='text-center'>
                            <Card.Title> Login</Card.Title>
                        </Card.Header> */}
                        <Card.Body>
                            
                                <Form.Group controlId="formBasicEmail">
                                    <FormLabel>Email Address</FormLabel>
                                    <Form.Control type="email" name="email" value={credentials.email} onChange={onInputChange} placeholder="Enter your email" autoFocus isInvalid={error?.loginemail?true:false} />
                                    <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text>
                                    <Form.Control.Feedback type="invalid">{error?.loginemail}</Form.Control.Feedback>
                                    
                                    
                                </Form.Group>
                                <FormGroup controlId="formBasicPassword">
                                    <FormLabel>Password:</FormLabel>
                                    <FormControl type ="password" name="password" value={credentials.password} onChange={onInputChange} placeholder="Input your password" autoFocus isInvalid={error?.password?true:false}/>
                                    <Form.Control.Feedback type="invalid">{error?.password}</Form.Control.Feedback>

                                </FormGroup>
                                <div className='invalid-feedback'>
                                    {console.log(error)}


                                </div>
                                
                            
                        </Card.Body>
                        
                        <Button style={{backgroundColor:'yellowgreen',color:'black'}} type="submit">
                                    Login
                                </Button>
                                {/* <Link to="/auth/signup">or Signup</Link> */}

                        

                    
                    
                    </Card>

               </Form>
               </Col>
           </Row>
            
        

    
        
        </>
       
    )
}
export default Login;
