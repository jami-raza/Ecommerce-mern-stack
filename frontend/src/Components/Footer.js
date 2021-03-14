import React from "react";
import "../Style/Footer.css";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../Content/images/SilverLogo.png";

const Footer = () => {
  return (
    <Container fluid className="contain footersection">
      <Row className="justify-content-center">
        <Col lg={4} xl={4} md={4} sm={12} xs={12} className="firstsection">
          <div className="section1">
            <a href="/">
              {" "}
              <img
                src={Logo}
                alt="Baba Beard"
                style={{
                  width: "100%",
                  maxWidth: "150px",
                  height: "150px",
                  objectFit: "contain",
                }}
              />
            </a>
          </div>
          <p className="sectioncontent1">
            BabaBeard is a private beard oil company that manufacture 100%
            organic beard oil.
          </p>
        </Col>

        {/*
         */}

        <Col lg={4} xl={4} md={4} sm={12} xs={12} className="secondsection">
          <p className="footerheading">Product</p>
          <div className="section2">
            <p>
              {" "}
              <a href="/about-us" className="linktag">
                {" "}
                About us
              </a>
            </p>
            <p>
              {" "}
              <a href="/replacing-policy" className="linktag">
                Replacing Policy{" "}
              </a>
            </p>
            <p>
              {" "}
              <a className="linktag" href="/refund-policy">
                {" "}
                Refund Policy
              </a>
            </p>
          </div>
        </Col>
        {/*<p>
              Got any query?
              <br /> Send us an email on{" "}
              <a href="support@bababeard.com">support@bababeard.com</a>
        </p>*/}
        <Col lg={4} xl={4} md={4} sm={12} xs={12} className="fourthsection">
          <p className="footerheading">Contact</p>
          <div className="section2">
            <p>
              
              <a className="linktag" href="/contact-us">
                Contact us
              </a>
            </p>
          </div>
          <div className="footer-icons">
            <div className="circle">
              <a href="www.twitter.com/bababeardco"> 
              <i class="fab fa-twitter" style={{color:'#00acee',fontSize:'32px'}}></i>
              </a>
            </div>
            <div className="circle">
              <a href="www.facebook.com/bababeardco">
              <i class="fab fa-facebook-f" style={{color:'#3b5998',fontSize:'32px'}}></i>
                 </a>
            </div>
            <div className="circle">
            
              
              <a href="www.instagram.com/bababeardco">
              <i class="fab fa-instagram instagram"></i>
              </a>
            
            </div>
            
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
