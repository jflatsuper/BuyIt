import React, {useEffect, useState} from 'react';
import user from '../Models/user';
import { Form,FormControl, FormGroup, FormLabel, FormText,Container,Button} from 'react-bootstrap';
function Profile({buyer,onUpdate}){
    const [profile,setProfile]=useState({
        dob:'',
        address:''
    })
    useEffect(()=>{
        setProfile({
            dob:buyer?.date_of_birth||'',
            address:buyer?.address||''
        })

    },[buyer]);
    const onSubmit=(e)=>{
        e.preventDefault();
        onUpdate(e,profile)
    }
    const onChange=(e)=>{
        e.preventDefault()
        setProfile({
            ...profile,
            [e.target.name]:e.target.value
        })
        console.log(profile)

    }
    

    return(
        <>
       <br/>
        <Form>
            <FormGroup className='my-4'>
                <FormLabel>Name:</FormLabel>
                <FormControl value={user.name}disabled/>

            </FormGroup>
            <FormGroup className='my-4'>
                <FormLabel>Email:</FormLabel>
                <FormControl  value={user.email} disabled/>

            </FormGroup>
        </Form>
        <Form onSubmit={onSubmit}>
            <FormGroup className="date-range" className='my-4'>
                <FormLabel>Date of Birth:</FormLabel>
                <FormControl type="date" value={profile.dob} name='dob' disabled={profile.dob?true:false} onChange={onChange} />
                {buyer?.date_of_birth?null:<Button type="submit"  >Change</Button>}
                
                <FormText >Note.Once you add your date of birth, it wont be changed</FormText>

            </FormGroup>
            

        </Form>
        <Form onSubmit={onSubmit}>
            <FormGroup className='my-4'>
                <FormLabel>Address:</FormLabel>
                <FormControl type="text" value={profile.address} name="address" onChange={onChange} />
                <Button type="submit" >Change</Button>
               
                

            </FormGroup>
        </Form>
        

        
        </>
    )

}
export default Profile;