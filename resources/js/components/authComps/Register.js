import React, { useState } from 'react';
import { Container, FormGroup,Form, FormLabel,FormControl, Row,Col, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import user from '../../Models/user';
function Register({handleRegister,callback,role,error}){
   
    const[values,setValues]=useState({
        name:'',
        email:'',
        password:'',
        password_confirmation:'',
        role:role


    });
    const[errors,setError]=useState({
        nameError:'',
        passError:'',
        emailError:'',
        confError:'',
    });
    const onInputChange=(e)=>{
        e.preventDefault();
        const currvalue=e.target.value;
        setValues({
            ...values,
            [e.target.name]:currvalue
        });
        console.log(values);


    }
  
    
    return (
        <>
        <Col xs={12} lg={6}>
            <Row xs={1} >
               <Col xs={12} lg={12}>
               <Form  onSubmit={(e)=>handleRegister(e,callback,values)} >
                <Card  className="shadow">
                        
                            
                        {/* <Card.Header style={{backgroundColor:'yellowgreen',color:'black'}} className='text-center'>
                            <Card.Title> Login</Card.Title>
                        </Card.Header> */}
                         <Card.Body>
                            <FormGroup>
                                <FormLabel>Name:</FormLabel>
                                <FormControl name="name" value={values.name} onChange={onInputChange} autoFocus isInvalid={errors.nameError?true:false}/>
                                <Form.Control.Feedback type="invalid">{errors.nameError}</Form.Control.Feedback>
                            </FormGroup>
                                
                            <FormGroup>
                                <FormLabel>Email:</FormLabel>
                                <FormControl type="email" name="email" value={values.email} onChange={onInputChange} autoFocus  isInvalid={error?.email?true:false}/>
                                <Form.Control.Feedback type="invalid">{error?.email}</Form.Control.Feedback>
                                
                            </FormGroup>
                            <FormGroup>
                                <FormLabel>Password:</FormLabel>
                                <FormControl type="password" name="password" value={values.password} onChange={onInputChange} autoFocus isInvalid={error?.password?true:false}/>
                                <Form.Control.Feedback type="invalid">{error?.password}</Form.Control.Feedback>
                                
                            </FormGroup>
                            <FormGroup>
                                <FormLabel>Confirm Password</FormLabel>
                                <FormControl type="password" name="password_confirmation" value={values.password_confirmation} onChange={onInputChange} autoFocus isInvalid={error?.confError?true:false}/>
                                <Form.Control.Feedback type="invalid">{error?.confError}</Form.Control.Feedback>
                                
                            </FormGroup>
                            <div className='invalid-feedback'>
                                    {console.log(error)}
                                    


                                </div>
                        </Card.Body>
                        
                        <Button style={{backgroundColor:'yellowgreen',color:'black'}} type="submit">
                                    Sign Up
                                </Button>
                                {/* <Link to="/auth/signup">or Signup</Link> */}

                        

                    
                    
                    </Card>

               </Form>
               </Col>
           </Row>

        </Col>
        
            
       
        </>

    )

}
export default Register;