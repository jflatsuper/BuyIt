import React,{useState} from 'react';
import  {Card, Container, Nav, Navbar,Row,Carousel, Image,Button,Stack} from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import '../../css/app.css';
import ImageOverlay from './ImageOverlayed'
import img from '../../../public/img/null.jpeg'

function Home(){
    const [capshow,showcap]=useState("none")
    const onPause=(e)=>{
        e.preventDefault()
        showcap("block")

    }
    return(
        <>
       
           
            <Container  fluid className=" col-lg-10 offset-lg-1 " style={{height:"" ,backgroundColor:"#b4b8b5"}}  bg="dark">
                <Row className="mb-5">
                    <Container fluid className="col-lg-4 mt-5 " >
                        <h1>Featured</h1>
                        <Card>
                            
                            <Card.Body className='px-0 py-0'>
                                <Container fluid className='px-0'>
                                 <Carousel controls={false} interval={2000} indicators={false} variant="dark" on={onPause}>
                                    <Carousel.Item>
                                        <ImageOverlay
                                        width="100%"
                                        src={img}
                                        caption="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                                        alt="first"
                                        />
                                   
                                       
                                    </Carousel.Item>
                                    <Carousel.Item>
                                    <ImageOverlay
                                        src={img}
                                        width="80%"
                                        caption="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                                        alt="second"
                                        />
                                       
                                    </Carousel.Item>
                                    <Carousel.Item>
                                    <ImageOverlay
                                        src={img}
                                        caption="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                                        width="80%"
                                        alt="third"
                                        />
                                       
                                    </Carousel.Item>
                                </Carousel>
                               </Container>
                            </Card.Body>
                                </Card>

                    </Container>
                    
                    <Container fluid className="offset-lg-1 col-lg-7 mt-5">
                        <Card>
                            <CardHeader>For You</CardHeader>
                            <Card.Body>
                                <Container>
                                    <Carousel>
                                        <Carousel.Item>
                                            <img
                                            className="d-block w-100"
                                            src={img}
                                            alt="First slide"
                                            />
                                            <Carousel.Caption>
                                            <h3>First slide label</h3>
                                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            className="d-block w-100"
                                            src={img}
                                            alt="Second slide"
                                            />

                                            <Carousel.Caption>
                                            <h3>Second slide label</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            className="d-block w-100"
                                            src={img}
                                            alt="Third slide"
                                            />

                                            <Carousel.Caption>
                                            <h3>Third slide label</h3>
                                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    </Carousel>


                                </Container>

                            </Card.Body>
                        </Card>
                        
                    </Container>

                </Row>
                <Row className="mt-5 h-20">
                    <Container>
                        <Card>
                            <Card.Header className="text-center">Top Rated</Card.Header>
                            <Card.Body>
                                <Container>
                                    <Carousel  variant="dark">
                                        <Carousel.Item>
                                            <img
                                            className="d-block w-100"
                                            src={img}
                                            alt="First slide"
                                            />
                                            <Carousel.Caption variant="light">
                                            <h3>First slide label</h3>
                                            <Button>Buy</Button>
                                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            className="d-block w-100"
                                            src={img}
                                            alt="Second slide"
                                            />

                                            <Carousel.Caption>
                                            <h3>Second slide label</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            className="d-block w-100"
                                            src={img}
                                            alt="Third slide"
                                            />

                                            <Carousel.Caption>
                                            <h3>Third slide label</h3>
                                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    </Carousel>
                                </Container>

                            </Card.Body>
                        </Card>

                    </Container>
                    
                
                </Row>
                {/* <Stack direction="horizontal" gap={3}>
  <div className="bg-light border">First item</div>
  <div className="bg-light border ms-auto">Second item</div>
  <div className="bg-light border">Third item</div>
</Stack>
                    <Nav defaultActiveKey="/home" className="flex-column">
                        <Nav.Link href="/home">Active</Nav.Link>
                        <Nav.Link eventKey="link-1">Link</Nav.Link>
                        <Nav.Link eventKey="link-2">Link</Nav.Link>
                        <Nav.Link eventKey="disabled" disabled>
                            Disabled
                        </Nav.Link>
                    </Nav> */}

                
                

            </Container>
            
        
       

       
        
        
        
        </>
    )
}
export default Home;