import React, { useEffect, useState } from 'react';
import { FormGroup ,Container,Form,Button} from 'react-bootstrap';
import user from '../Models/user'
import {PaystackButton } from 'react-paystack';

function Checkout({total,carted,handleSuccess}){
   const [checked,setChecked]=useState([])
   const [unchecked,setUnchecked]=useState([])
   const config = {
    
    email: user.email,
    amount: total*100,
    
    publicKey:process.env.MIX_PAYSTACK_PUBLIC_KEY,
  };
  useEffect(()=>{
    (async()=>{
      const t=await carted.filter(t=>t.checked===true)
      const f=await carted.filter(t=>t.checked===false)
      await setUnchecked(f)
      await setChecked(t)

    })()
  },[carted])
    const handlePaystackSuccessAction = (reference) => {
        // Implementation for whatever you want to do with reference and after success call.
        console.log(reference);
        console.log(checked)
        handleSuccess(reference,checked,unchecked)

  };
  
      // you can call this function anything
    const handlePaystackCloseAction = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        console.log('closed')
      }
  
    const componentProps = {
          ...config,
          text: 'SUBMIT',
          
          onSuccess: (reference) => handlePaystackSuccessAction(reference),
          onClose: handlePaystackCloseAction,
      };
    // const payout=()=>{
    //     window.axios.post("/api/pay",{
    //         email:"joshsupersport@gmail.com",
    //         amount:800,
    //         reference:Date.now(),
    //     }).then((response)=>{
    //         console.log(response.data)
    //     })
    // }
    return(
        
        <Container>
          
           <PaystackButton {...componentProps} />
        </Container>
    )

}
export default Checkout