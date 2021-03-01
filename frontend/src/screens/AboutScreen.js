import React from "react";

import "../Style/About.css";

import { Container, Col, Row } from "react-bootstrap";
import sunbottle from "../Content/images/faizan2.jpg";

import Services from "../Components/Services";
function About() {
  return (
    <div>
      <div>
        <Container fluid className="bannr">
          <div className="bannertxt2">BabaBeard - About us</div>
        </Container>
      </div>

      <Container>
        <Row className="justify-content-center">
          <Col lg={6} xl={6} md={8} sm={8} xs={8} className="aboutsection1">
            <div>
              <p className="aboutfont1heading"> Our story </p>

              <hr />
              <p className="aboutcontent">
                The time when everyone was having beard craze, there was a team
                of friends aiming to have a beard like no one else, thick, shiny
                and Attractive. But I noticed that growing and maintaining a
                beard was not an easy feat. They have tried almost every
                existing product in the market but FAILED to have those desired
                results AS PROMISED. After getting disappointed they started
                sorting out the necessary elements that can help to grow and
                maintain the Beard, with no itching and irritation at all.
              </p>

              <p className="aboutcontent">
                After comparing 50+ top leading brands all over the world,
                researching almost every existing skin friendly ingredient that
                can accelerate the growth of Facial Hair, make the beard look
                shiny and attractive, and can fill the patches of already grown
                patchy beard. They started manufacturing multiple samples and
                trying on themselves.
              </p>

              <p className="aboutcontent">
                The results were quite impressive and surprising. So, they
                decided to rescue all those who got stuck in the trap that
                required you to buy multiples of product to grow, remove
                patches, or maintain your beard.
              </p>

              <p className="aboutcontent">
                This is how “Baba Beard” a Beard Care Company came into
                existence, to cater the Best product to their bearded Brothers.
              </p>
            </div>
          </Col>

          <Col lg={4} xl={4} md={8} sm={8} xs={8}>
            <div className="AboutColumnimg">
              <img className="Columnimg1" src={sunbottle} />
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row className="justify-content-center">
          <Col lg={10} xl={10} md={10} sm={12} xs={12} className="dvabout1">
            <div>
              <p className="dvaboutfont1"> Our Mission </p>
              <hr />
              <p className="aboutcontent">
                Baba beard aims to provide the premium Quality Product to our
                highly valuable customers. Baba Beard values the care you are
                giving to your Beard. That is why Baba Beard is committed to
                provide 100% organic Beard Oil having 0% chemical tolerance.
              </p>
              <br />
              <br />
            </div>
          </Col>
        </Row>
      </Container>

      <div className="parallax1"></div>

      <Container fluid>
        <Row className="justify-content-center">
          <Col lg={10} xl={10} md={10} sm={12} xs={12} className="dvabout1">
            <div>
              <p className="dvaboutfont1"> Why Baba Beard? </p>
              <hr />
              <p className="aboutcontent2">
                Our beard oil contains 100% Organic Oils which are free from any
                harmful chemicals. We have designed a step by step procedure of
                growing your beard in 3 stages.
                <br />
                ACTIVATE - FILL PATCHES - NOURISH
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row className="justify-content-center emaildivbackground">
          <Col lg={5} xl={5} md={5} sm={12} xs={12} className="emaildiv">
            <div>
              <p className="emailfont1">
                To get the news and updates related to Baba Beard{" "}
              </p>
              <br />
              <p className="emailfont2">Enter your email for Subscription. </p>

              <input
                className="emailinput"
                type="email"
                id="email"
                name="email"
                placeholder="Type your email"
              />

              <button className="btnemailsignup"> Signup </button>
            </div>
          </Col>
        </Row>
      </Container>
      <Services />
      
    </div>
  );
}
export default About;
