import React, { useEffect, useState } from 'react';
import { FormGroup ,Container,Form,Button,Card,Image,Row,Col,Modal} from 'react-bootstrap';
import {BsBagCheck,BsCheck} from 'react-icons/bs'
import user from '../Models/user'
import {PaystackButton } from 'react-paystack';
import img from '../../../public/img/null.jpeg'
function Checkout({total,carted,handleSuccess}){
   const [checked,setChecked]=useState([])
   const [unchecked,setUnchecked]=useState([])
   const [modal,setModal]=useState(false)
   const [references,setref]=useState()
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
        setref(reference)
        setModal(true)
        handleSuccess(reference,checked,unchecked)
        


  };
  
      // you can call this function anything
    const handlePaystackCloseAction = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        console.log('closed')
        

      }
      const handleClose=()=>{
        setModal(false)
      }
  
    const componentProps = {
          ...config,
          text: <BsBagCheck style={{color:'yellowgreen'}}/>,
          
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
          {/* <Modal show={modal} onHide={handleClose} centered  >
            <Modal.Header closeButton>
              <h4> this is it</h4>


            </Modal.Header>
            <Modal.Body>
               <Row  xs={1}>
                  <Col>
                          <Card  className="shadow my-2  rounded">
                        
                                <Card.Body >
                                    <Row style={{width:'100%'}} lg={2} xs={2}>
                                        <Col style={{height:'100px'}} className="d-flex align-items-center" lg={1} xs={2} >
                                            <BsCheck/>
                                        </Col>
                                        <Col xs={10} lg={10} >
                                            <Row style={{height:'100px'}}>
                                                <Col lg={10} xs={6}>
                                                    <Row xs={1} lg={1}>
                                                        <Col xs={12}>
                                                            <b><p><span style={{width:'100%',overflowY:'clip',textOverflow:'ellipsis',whiteSpace:'nowrap',float:'left'}}>{references?.reference}</span><span >&#8358;{total*100}</span></p></b>
                                                            
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                
                                            </Row>
                                        </Col>

                                    </Row>
                            
                                </Card.Body>
                            </Card>
                    </Col>
                          

                </Row>
              </Modal.Body>
          </Modal> */}
          
           <PaystackButton className='btn btn-dark btn-md' style={{width:'auto'}} {...componentProps} />
        </Container>
    )

}
export default Checkout