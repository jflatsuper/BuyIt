import React, { useState } from 'react';
import { Container, FormGroup,Form, FormLabel,FormControl, FormCheck, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import user from '../../Models/user';
function Register({handleRegister,callback,role}){
   
    const[values,setValues]=useState({
        name:'',
        email:'',
        password:'',
        confirm_password:'',
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
        <Container>
            <Form onSubmit={(e)=>handleRegister(e,callback,values)}>
                <FormGroup>
                    <FormLabel>Name:</FormLabel>
                    <FormControl name="name" value={values.name} onChange={onInputChange} autoFocus isInvalid={errors.nameError?true:false}/>
                    <Form.Control.Feedback type="invalid">{errors.nameError}</Form.Control.Feedback>
                </FormGroup>
                    
                <FormGroup>
                    <FormLabel>Email:</FormLabel>
                    <FormControl type="email" name="email" value={values.email} onChange={onInputChange} autoFocus  isInvalid={errors.emailError?true:false}/>
                    <Form.Control.Feedback type="invalid">{errors.emailError}</Form.Control.Feedback>
                    
                </FormGroup>
                <FormGroup>
                    <FormLabel>Password:</FormLabel>
                    <FormControl type="password" name="password" value={values.password} onChange={onInputChange} autoFocus isInvalid={errors.passError?true:false}/>
                    <Form.Control.Feedback type="invalid">{errors.passError}</Form.Control.Feedback>
                    
                </FormGroup>
                <FormGroup>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl type="password" name="confirm_password" value={values.confirm_password} onChange={onInputChange} autoFocus isInvalid={errors.confError?true:false}/>
                    <Form.Control.Feedback type="invalid">{errors.confError}</Form.Control.Feedback>
                    
                </FormGroup>
                
                <Button type='submit'>Sign Up</Button>
            </Form>
        </Container>
        </>

    )

}
export default Register;