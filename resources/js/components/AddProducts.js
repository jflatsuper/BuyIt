import React, { useState } from 'react';
import { Container, Form, FormCheck, FormControl, FormGroup, FormLabel, FormSelect,FormText,Button } from 'react-bootstrap';
function AddProducts(){
    const [product,setProduct]=useState({
        name:'',
        type:'',
        isAvailable:false,
        large:false,
        medium:false,
        small:false,
        price:0,
        gender:'',
        color:'',
        file:''

    });
    const [checked,setCheck]=useState(false);
    const onInputChange=(e)=>{
        const currvalue=e.target.value;
        setProduct({
            ...product,
            
            [e.target.name]:e.target.type==="checkbox"?e.target.checked?true:false:currvalue
        });
        console.log(product);
    };
    const handleCreate=(e)=>{
        e.preventDefault();
    
    window.axios.post("api/create",product).then((response)=>{
        console.log(response.data);
    })}
    return(
        <>
        <Container fluid>
            <Form  onSubmit={handleCreate}>
                <FormGroup>
                    <FormLabel>
                        Name:
                    </FormLabel>
                    <FormControl type="text" name="name" value={product.name} onChange={onInputChange} autoFocus/>
                    <Form.Text className="text-muted">
                            Tell Us what you want users to see as your product name
                    </Form.Text>
                </FormGroup>
                <FormGroup>
                    <FormLabel>Type:</FormLabel>
                    <FormSelect name="type" value={product.type} onChange={onInputChange} autoFocus>
                        <option>Shirt</option>
                        <option>Trouser</option>
                        <option>Skirt</option>
                    </FormSelect>
                    <FormText>
                        Your clothing definitely could be here
                    </FormText>

                </FormGroup>
                <FormGroup>
                    <FormLabel>Price:</FormLabel>
                    <FormControl type="number" name="price" value={product.price} onChange={onInputChange} autoFocus/>
                    <FormText>
                        Price the user will see
                    </FormText>

                </FormGroup>
                <FormGroup>
                
                <FormCheck 
                    
                    name="isAvailable"
                    value={product.isAvailable}
                    onChange={onInputChange}
                    
                    type="switch"
                    id="custom-switch"
                    label="Is this product currently Available"
                    autoFocus
                />

                </FormGroup>
                <FormGroup>
                <FormCheck value={product.large}
                    onChange={onInputChange}
                    name="large"
                    type="switch"
                    id="custom-switch"
                    label="Large"
                    autoFocus
                />

                </FormGroup>
                <FormGroup>
                    <FormCheck value={product.medium}
                        onChange={onInputChange}
                        name="medium"
                        type="switch"
                        id="custom-switch"
                        label="Medium"
                        autoFocus
                    />

                </FormGroup>
                <FormGroup>
                 <FormCheck value={product.small}
                    onChange={onInputChange}
                    name="small"
                    type="switch"
                    id="custom-switch"
                    label="Small"
                    autoFocus
                 />
                </FormGroup>
                <FormGroup>
                    <FormSelect value={product.gender} onChange={onInputChange} name="gender" autoFocus>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Unisex</option>
                    </FormSelect>
                </FormGroup>
                <FormGroup>
                    <FormSelect value={product.color} onChange={onInputChange} name="color" autoFocus >
                        <option>Red</option>
                        <option>Orange</option>
                        <option>Yellow</option>
                        <option>Green</option>
                        <option>Blue</option>
                        <option>Indigo</option>
                        <option>Purple</option>
                        <option>Violet</option>
                        
                    </FormSelect>

                </FormGroup>
                <FormGroup>
                    <FormLabel  >
                        Upload product image
                    </FormLabel>
                    <FormControl value={product.file} type="file" name="file" onChange={onInputChange} autoFocus/>
                    
                </FormGroup>
                <Button type="submit">Submit</Button>

            </Form>

        </Container>
        </>


    )
}

export default AddProducts;