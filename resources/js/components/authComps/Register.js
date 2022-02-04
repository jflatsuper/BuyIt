import React, { useState } from 'react';
import { Container, FormGroup,Form, FormLabel,FormControl, FormCheck, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import user from '../../Models/user';
function Register(){
    const navigate=useNavigate();
    const[values,setValues]=useState({
        name:'',
        email:'',
        password:'',
        confirm_password:'',


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
    const authenticatedCallback = () => {
        navigate('/dashboard',{replace:true})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        window.axios.post("/api/checkEmail",values).then((response)=>{
            if(response.data){
                setError({
                    ...errors,
                    emailError:"Email already linked with existing user"
                });
            }else{
                if(values.password!==values.confirm_password){
                    setError({
                        ...errors,
                        confError:"Password does not match"
                    });


                }
                else{
                    window.axios.post("/api/createUser",values).then(response=>{
                        user.authenticated(response.data,authenticatedCallback);

                    })
                }

            }
        });
    }
    
    
    return (
        <>
        <Container>
            <Form onSubmit={handleSubmit}>
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