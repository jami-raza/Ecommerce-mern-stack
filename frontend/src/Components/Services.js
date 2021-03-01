import React from "react";
import { Container, Col, Row, Media } from "react-bootstrap";
import "../Style/Services.css";
import Homedelivery from "../Content/images/truck-solid.svg";
import Qualityicon from "../Content/images/ribbon-solid.svg";
import Exchangeicon from "../Content/images/exchange-solid.svg";
import Onlineicon from "../Content/images/globe-solid.svg";
const Services = () => {
  return (
    <Container fluid>
      <Row className="Mediasection">
        <Col lg={3} xl={3} md={6} sm={6} xs={10} className="innersection mb-3">
          <Media>
            <img
              width={44}
              height={44}
              className="align-self-center mr-3 icons"
              src={Homedelivery}
              alt="Generic placeholder"
            />
            <Media.Body>
              <h5>Free Home Delivery</h5>
              <p>Provide free home delivery for all product over $100</p>
            </Media.Body>
          </Media>
        </Col>

        <Col lg={3} xl={3} md={6} sm={6} xs={10} className="innersection mb-3">
          <Media>
            <img
              width={44}
              height={44}
              className="align-self-center mr-3 icons"
              src={Qualityicon}
              alt="Generic placeholder"
            />
            <Media.Body>
              <h5>Quality Products</h5>
              <p>We ensure the product quality that is our main goal</p>
            </Media.Body>
          </Media>
        </Col>

        <Col lg={3} xl={3} md={6} sm={6} xs={10} className="innersection mb-3">
          <Media>
            <img
              width={44}
              height={44}
              className="align-self-center mr-3 icons"
              src={Exchangeicon}
              alt="Generic placeholder"
            />
            <Media.Body>
              <h5>Return</h5>
              <p>Return any product within 3 days you buy lorem ipsum</p>
            </Media.Body>
          </Media>
        </Col>

        <Col lg={3} xl={3} md={6} sm={6} xs={10} className="innersection mb-3">
          <Media>
            <img
              width={44}
              height={44}
              className="align-self-center mr-3 icons"
              src={Onlineicon}
              alt="Generic placeholder"
            />
            <Media.Body>
              <h5>Online Support</h5>
              <p>We ensure the product quality that you can trust easily</p>
            </Media.Body>
          </Media>
        </Col>
      </Row>
    </Container>
  );
};
export default Services;
