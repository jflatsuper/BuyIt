import React from 'react';
import { FormGroup ,Container,Form,Button} from 'react-bootstrap';
import user from '../Models/user'
import {PaystackButton } from 'react-paystack';

function Checkout({total,carted}){
  const config = {
    reference: Date.now(),
    email: user.email,
    amount: total*100,
    
    publicKey:process.env.MIX_PAYSTACK_PUBLIC_KEY,
};
    const handlePaystackSuccessAction = (reference) => {
        // Implementation for whatever you want to do with reference and after success call.
        console.log(reference);
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