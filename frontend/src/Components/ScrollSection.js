import React from 'react';
import "../Style/Scrollable.css"
import Nourish from '../Content/images/Activate.png'

import {Container, Col, Row, Form, Button} from "react-bootstrap";
const Scrollableimage=()=>{
    return(

<div>
<Container fluid className="parallax">
    <Row>
        <Col md={4} lg={6} xl={6} >
            <img className="nourish" src={Nourish} />
        </Col>
        <Col className="align-self-center">
            <div className="subscription">
                <h5>
                Special Offers for Subscription
                </h5>
                <h1>Join Us and Get Special 10% Discount on your first order</h1>
                <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" required/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
            </div>
        </Col>
    </Row>
</Container>



</div>






    );}
export default Scrollableimage;