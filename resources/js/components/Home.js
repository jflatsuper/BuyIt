import React from 'react';
import  {Card, Container, Nav, Navbar,Row,Carousel, Image,Button,Stack} from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
 
function Home(){
    return(
        <>
        <div>
            
            <Container  fluid className=" col-lg-10 offset-lg-1 alert alert-success mt-5" style={{height:""}}  bg="dark">
                <Row className="mt-5 mb-5">
                    <Container fluid className="col-lg-4 " >
                        <Card>
                            <Card.Header className="text-center">
                                Featured

                            </Card.Header>
                            <Card.Body>
                                <Container>
                                 <Carousel controls={false} interval={20} indicators={false} variant="dark">
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2016/12/attachment_59520340-e1513615977421.jpg?auto=format&q=60&fit=max&w=930"
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
                                        src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2016/12/attachment_59520340-e1513615977421.jpg?auto=format&q=60&fit=max&w=930"
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
                                        src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2016/12/attachment_59520340-e1513615977421.jpg?auto=format&q=60&fit=max&w=930"
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
                    
                    <Container fluid className="offset-lg-1 col-lg-7">
                        <Card>
                            <CardHeader>For You</CardHeader>
                            <Card.Body>
                                <Container>
                                    <Carousel>
                                        <Carousel.Item>
                                            <img
                                            className="d-block w-100"
                                            src="holder.js/800x400?text=First slide&bg=373940"
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
                                            src="holder.js/800x400?text=Second slide&bg=282c34"
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
                                            src="holder.js/800x400?text=Third slide&bg=20232a"
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
                                            src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2016/12/attachment_59520340-e1513615977421.jpg?auto=format&q=60&fit=max&w=930"
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
                                            src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2016/12/attachment_59520340-e1513615977421.jpg?auto=format&q=60&fit=max&w=930"
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
                                            src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2016/12/attachment_59520340-e1513615977421.jpg?auto=format&q=60&fit=max&w=930"
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
            
        
       

       
        
        
        </div>
        </>
    )
}
export default Home;