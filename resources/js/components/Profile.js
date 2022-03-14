import React, {useEffect, useState} from 'react';
import user from '../Models/user';
import { Form,FormControl, FormGroup, FormLabel, FormText,Container,Button} from 'react-bootstrap';
function Profile(){
    const [address,setAddress]=useState({
        address:"",
    });
    const [dateofbirth,setBirth]=useState({
        birth:"",
        birth02:""
    });
    const onAddressChange=(e)=>{
        setAddress({
            ...address,
            address:e.target.value})

    }
    

    useEffect(()=>{
        window.axios.get("/api/basicdetails").then((response)=>{
            if(response.data.address){
                setAddress({
                    ...address,
                    address: response.data.address});
            }
            if(response.data.date_of_birth){
           
           setBirth({
               ...dateofbirth,
               birth:response.data.date_of_birth,
               birth02:response.data.date_of_birth

           });}

        });

    },[]);
    const onBirth=(e)=>{
        e.preventDefault();
        window.axios.put("/api/changeDOB",dateofbirth).then((response)=>{
            console.log(response.data);
            setBirth({
                ...dateofbirth,
                birth:response.data,

            })
        });
        window.location.reload(true);

        

    };
    const onBirthChange=(e)=>{
        e.preventDefault();
        setBirth({
            ...dateofbirth,
            birth: e.target.value

        });
        console.log(dateofbirth);
    }
    const updateAddress=(e)=>{
        e.preventDefault();
        console.log(address);

        window.axios.put("/api/changeAddress",address).then((response)=>{
            console.log(response.data);
            setAddress({
                ...address,
                address: response.data});


        })

    }

    return(
        <>
       
        <Form>
            <FormGroup>
                <FormLabel>Name:</FormLabel>
                <FormControl value={user.name}disabled/>

            </FormGroup>
            <FormGroup>
                <FormLabel>Email:</FormLabel>
                <FormControl  value={user.email} disabled/>

            </FormGroup>
        </Form>
        <Form onSubmit={onBirth}>
            <FormGroup className="date-range">
                <FormLabel>Date of Birth:</FormLabel>
                <FormControl type="date" value={dateofbirth.birth} disabled={dateofbirth.birth02?true:false} onChange={onBirthChange} />
                {dateofbirth.birth02?null:<Button type="submit" >Change</Button>}
                
                <FormText >Note.Once you add your date of birth, it wont be changed</FormText>

            </FormGroup>
            

        </Form>
        <Form onSubmit={updateAddress}>
            <FormGroup>
                <FormLabel>Address:</FormLabel>
                <FormControl type="text" value={address.address} name="address" onChange={onAddressChange} />
                <Button type="submit">Change</Button>
               
                

            </FormGroup>
        </Form>
        

        
        </>
    )

}
export default Profile;