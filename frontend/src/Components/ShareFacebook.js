import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "../Style/ShareFacebook.css"
const ShareFacebook = () => {
  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Col sm={12} xs={12} lg={6} md={6} xl={6} className="mb-5">
            <div className="content">
              <h2>Baba Beard Facebook Group</h2>
              <p>
                Join our Facebook group and avail 5% discount. Baba Beard will
                also require Graphic Designer, Content Writers and other jobs
                for their brand which they will post on their Fb Group.
              </p>
            </div>
          </Col>
          <Col sm={12} xs={12} lg={6} md={6} xl={6} lg={6} className="mb-5">
            <iframe
              className="d-none d-sm-block"
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fbababeardco&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="340"
              height="500"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameborder="1"
              allowfullscreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
            </Col>
            <Col sm={12} xs={12} lg={6} md={6} xl={6} lg={6} className="mb-5">
            <iframe
            className="d-block d-sm-none"
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fbababeardco&tabs=timeline&width=250&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="250"
              height="500"
              style={{border:"none",overflow:"hidden"}}
              scrolling="no"
              frameborder="0"
              allowfullscreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ShareFacebook;
