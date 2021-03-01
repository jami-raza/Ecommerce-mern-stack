import React from "react";
import { Container, Row } from "react-bootstrap";
import "../Style/Policy.css";
function ReplacingPolicy() {
  return (
    <div>
      <Container>
        <Row>
          <div className="col-lg-12 col-sm-12 col-md-12">
            <div className="bannertext2">BabaBeard - Replacing Policy</div>

            <div className="refundpolicy">
              If the bottle is delivered damaged or if you feel any irritation
              on your skin after applying, you can contact us at
              support@bababeard.com to get your bottle replaced.
            </div>

            <div className="policyheading">Conditions:</div>
            <div className="policycontent">
              1. The box should not be damaged. <br />
              2. The invoice should not be damaged, if damaged you will be sent
              a copy of invoice at your email so you can print it and use as a
              proof of your order.
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default ReplacingPolicy;
