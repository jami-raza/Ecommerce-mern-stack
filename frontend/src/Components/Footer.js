import React from "react";
import "../Style/Footer.css";
import { Container, Col, Row } from "react-bootstrap";
import {Link} from 'react-router-dom'
import Logo from "../Content/images/Silver.png";
const Footer = () => {
  return (
    <Container fluid className="contain">
      <Row className="justify-content-around footersection">
        <Col lg={6} xl={6} md={6} sm={6} xs={12} className="firstsection">
          <div>
            <Link to ="/">
              {" "}
              <img
                src={Logo}
                alt="Baba Beard"
                style={{
                  width: "100%",
                  maxWidth: "75px",
                  height: "75px",
                  objectFit: "contain",
                }}
              />
            </Link>
            <p className="sectioncontent1">
              BabaBeard is a private beard oil company that manufacture 100%
              organic beard oil.
            </p>
            <p>
              <a
                style={{ marginRight: "10px" }}
                href="www.facebook.com/bababeardco"
              >
                {" "}
              </a>
              <a
                style={{ marginRight: "10px" }}
                href="www.instagram.com/bababeardco"
              >
                {" "}
              </a>
              <a href="www.twitter.com/bababeardco"> </a>
            </p>
            <p>
              Got any query?
              <br /> Send us an email on{" "}
              <a href="support@bababeard.com">support@bababeard.com</a>
            </p>
          </div>
        </Col>

        <Col lg={2} xl={2} md={6} sm={6} xs={12} className="secondsection">
          <div>
            <p className="footerheading">Product</p>
            <p>
              {" "}
              <Link to="/about-us" className="linktag">
                {" "}
                About us
              </Link>
            </p>
            <p>
              {" "}
              <Link to="/replacing-policy" className="linktag">
                Replacing Policy{" "}
              </Link>
            </p>
            <p>
              {" "}
              <Link className="linktag" to="/refund-policy">
                {" "}
                Refund Policy
              </Link>
            </p>

            
          </div>
        </Col>



        <Col lg={2} xl={2} md={6} sm={6} xs={12} className="fourthsection">
          <div>
            <p className="footerheading">Contact</p>

            <p>
              <Link className="linktag" to="/contact-us">
                {" "}
                Contact us{" "}
              </Link>{" "}
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
