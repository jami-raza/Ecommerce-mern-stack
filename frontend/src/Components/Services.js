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
              <h5>DELIVERING NATION-WIDE</h5>
              <p>We are delivering our bottle of care to your door step, all over Pakistan</p>
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
            <h5>PREMIUM QUALITY PRODUCT</h5>
              <p>You will get exactly what you are paying for “a Premium Quality Product”</p>
             
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
            <h5>NO SIDE EFFECTS</h5>
              <p>We know your worries,we have made sure that you'll only get benefits from Baba Beard.</p>
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
              <p> Connect with us <a style={{color:"black"}} href="mailto:support@bababeard.com">@support.bababeard.com</a> for any query </p>
            </Media.Body>
          </Media>
        </Col>
      </Row>
    </Container>
  );
};
export default Services;
