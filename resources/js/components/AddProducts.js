import React, { useState } from 'react';
import { Container, Form, FormCheck, FormControl, FormGroup, FormLabel, FormSelect,FormText,Button, ProgressBar } from 'react-bootstrap';
function AddProducts(){
    const [product,setProduct]=useState({
        name:'',
        type:'Shirt',
        large:0,
        medium:0,
        small:0,
        description:'',
        price:0,
        gender:'Male',
        color:'Red',
        file:'',
        fileup:{}

    });
    const [now,setNow]=useState(0)
    const [img,setimgFile]=useState()
    let updateProgress=0
   
    const onInputChange=(e)=>{
        const currvalue=e.target.value;
        setProduct({
            ...product,
            // [e.target.name]:e.target.type==="checkbox"?e.target.checked?true:false:currvalue
            
            [e.target.name]:currvalue
        });
        console.log(product);
    };
    const onFileUpload=(e)=>{
        e.preventDefault()
        setimgFile(e.target.files[0])
        setProduct( {
                ...product,
                [e.target.name]:e.target.value
            })
        console.log(img)
    }
    const handleCreate=(e)=>{
        e.preventDefault();
        const data=new FormData()
        data.append('file',img)
        data.append('name',product.name)
        data.append('type',product.type)
        
        data.append('large',JSON.stringify(product.large))
        data.append('price',JSON.stringify(product.price))
        data.append('description',product.description)
        data.append('medium',JSON.stringify(product.medium))
        data.append('small',JSON.stringify(product.small))
        data.append('gender',product.gender)
        data.append('color',product.color)
        data.append('file',product.file)
       
        console.log(data)
    const options={
        onUploadProgress:(e)=>{
            console.log('worlls')
            console.log(e)
            const{loaded,total}=e
            setNow((loaded/total)*100)
            console.log(loaded+'of '+total)

        }
    }
       
    window.axios.post("/api/create",data,options)
                .then(response=>(console.log(response)))
    }
    return(
        <>
        <Container fluid style={{backgroundColor:"rgba(154, 205, 50,1)"}} className="px-4 py-4">
            <Form  onSubmit={handleCreate} >
                <FormGroup className=" py-2">
                    <FormLabel>
                        Name:
                    </FormLabel>
                    <FormControl type="text" name="name" value={product.name} onChange={onInputChange} autoFocus/>
                    <Form.Text className="text-muted">
                            Tell Us what you want users to see as your product name
                    </Form.Text>
                </FormGroup>
                <FormGroup className=" py-2" >
                    <FormLabel>Type:</FormLabel>
                    <FormSelect name="type"  defaultValue={product.type} onChange={onInputChange} autoFocus required>
                        <option value="nothing" disabled>Clothing Type</option>
                        <option>Shirt</option>
                        <option>Trouser</option>
                        <option>Skirt</option>
                    </FormSelect>
                    <FormText>
                        Your clothing definitely could be here
                    </FormText>

                </FormGroup>
                <FormGroup className=" py-2">
                    <FormLabel>Description</FormLabel>
                    <FormControl type="textarea" placeholder="Product Description" name='description' value={product.description} onChange={onInputChange}/>
                </FormGroup>
                <FormGroup className=" py-2">
                    <FormLabel>Price:</FormLabel>
                    <FormControl type="number" name="price" value={product.price} onChange={onInputChange} autoFocus/>
                    <FormText>
                        Price the user will see
                    </FormText>

                </FormGroup>
                
                <FormGroup className=" py-2">
                    <FormLabel>Large:</FormLabel>
                    <FormControl value={product.large}
                        onChange={onInputChange}
                        name="large"
                        type="number"
                        autoFocus
                    />

                </FormGroup>
                <FormGroup className=" py-2">
                    <FormLabel>Medium:</FormLabel>
                    <FormControl 
                        value={product.medium}
                        onChange={onInputChange}
                        name="medium"
                        type="number"
                        autoFocus
                    />

                </FormGroup>
                
                <FormGroup className=" py-2">
                    <FormLabel>Small</FormLabel>
                    <FormControl 
                        value={product.small}
                        onChange={onInputChange}
                        name="small"
                        type="number"
                        autoFocus
                    />
                </FormGroup>
                <FormGroup className=" py-2">
                    <FormLabel>Gender:</FormLabel>
                    <FormSelect value={product.gender} onChange={onInputChange} name="gender" autoFocus>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Unisex</option>
                    </FormSelect>
                </FormGroup>
                <FormGroup className=" py-2">
                <FormLabel>Color:</FormLabel>
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
                <FormGroup className=" py-2">
                    <FormLabel  >
                        Upload product image
                    </FormLabel>
                    <FormControl type="file" value={product.file}  name="file" onChange={onFileUpload} accept="image/jpeg,image/jpg,image/bmp,image/raw,image/png" required autoFocus/>
                    
                </FormGroup>
                <hr/>
                <Button type="submit" style={{backgroundColor:'rgba(0,0,0,1)',width:'100%'}}>Submit</Button>

            </Form>
            <ProgressBar now={now}></ProgressBar>

        </Container>
        </>


    )
}

export default AddProducts;