import React, { useState } from 'react';
import { Card, Form, FormControl, FormGroup, FormLabel,Button,Container } from 'react-bootstrap';
import { Navigate, useNavigate,Route, useLocation ,Link} from 'react-router-dom';
import user from "../../Models/user";

function Login({handleLogin,callback,role}){
    const [credentials,useCredentials]=useState({
        email: "",
        password: "",
        role:role
    });
     const [error,setError]=useState('');
    const onInputChange=(e)=>{
        const currvalue=e.target.value;
        useCredentials({
            ...credentials,
            [e.target.name]:currvalue,
           
        });



    };
    return (
        <>
        <Card>
            <Container>
                
                <Card.Title> Login</Card.Title>
                <Card.Body>
                    <Form onSubmit={(e)=>handleLogin(e,callback,credentials)}>
                        <Form.Group controlId="formBasicEmail">
                            <FormLabel>Email Address</FormLabel>
                            <Form.Control type="email" name="email" value={credentials.email} onChange={onInputChange} placeholder="Enter your email" autoFocus isInvalid={error?true:false} />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                            
                            
                        </Form.Group>
                        <FormGroup controlId="formBasicPassword">
                            <FormLabel>Password:</FormLabel>
                            <FormControl type ="password" name="password" value={credentials.password} onChange={onInputChange} placeholder="Input your password" autoFocus isInvalid={error?true:false}/>
                            <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>

                        </FormGroup>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                        <Link to="/signup">or Signup</Link>
                    </Form>
                </Card.Body>

            </Container>
            
        </Card>
        </>
       
    )
}
export default Login;
