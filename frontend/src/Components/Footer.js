import React from "react";
import "../Style/Footer.css";
import { Container, Col, Row } from "react-bootstrap";
import Logo from "../Content/images/SilverLogo.png";

const Footer = () => {
  return (
    <Container fluid className="contain footersection">
      <Row className="justify-content-center p-5">
        <Col lg={3} xl={3} md={3} sm={12} xs={12} className="firstsection">
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
            BabaBeard is a Private Ltd. Beard Oil Company that manufacture 100%
            Organic Beard Oil.
          </p>
        </Col>

        {/*
         */}

        <Col lg={3} xl={3} md={3} sm={12} xs={12} className="secondsection">
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
            <p>
              
              <a className="linktag" href="/contact-us">
                Contact us
              </a>
            </p>
          </div>
        </Col>
        {/*<p>
              Got any query?
              <br /> Send us an email on{" "}
              <a href="support@bababeard.com">support@bababeard.com</a>
        </p>*/}
        <Col lg={3} xl={3} md={3} sm={12} xs={12} className="fourthsection">
          <p className="footerheading">Contact</p>
          
          
            <div style={{display:"block",paddingTop:"25px"}}>
              <div>
                <p>
              <a href="tel:+92 316 0268662"> 
              +92 316 0268662
              </a>
              </p>
            </div>
              <div>
                <p>
              <a href="mailto:support@bababeard.com">
              support@bababeard.com
              </a>
              </p>
            </div>
            </div>
            
          
        </Col>
        <Col lg={3} xl={3} md={3} sm={12} xs={12} className="fourthsection">
          <p className="footerheading">Social</p>
          <div className="section2">
            
          </div>
          <div className="footer-icons">
            <div >
              <a href="https://www.twitter.com/bababeardco"> 
              <i class="fab fa-twitter" style={{color:'#f4f4f4',fontSize:'24px',marginRight:'20px'}}></i>
              </a>
            </div>
            <div >
              <a href="https://www.facebook.com/bababeardco">
              <i class="fab fa-facebook-f" style={{color:'#f4f4f4',fontSize:'24px',marginRight:'20px'}}></i>
                 </a>
            </div>
            <div>
            
              
              <a href="https://www.instagram.com/bababeardco">
              <i class="fab fa-instagram instagram" style={{color:'#f4f4f4',fontSize:'24px'}}></i>
              </a>
            
            </div>
            
          </div>
        </Col>
        
      </Row>
      <Row>
      <Col lg={12} xl={12} md={12} sm={12} xs={12} className="footerbottom">
          <p className="copy-right">Copyrights @2021 <a href="https//:www.bababeard.com">BabaBeard</a>. All rights reserved</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;