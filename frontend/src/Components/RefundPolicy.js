import React from "react";
import { Container, Row } from "react-bootstrap";
import "../Style/Policy.css";

function RefundPolicy() {
  return (
    <div>
      <Container fluid className="dv1"></Container>

      <Container>
        <Row>
          <div className="col-lg-12 col-sm-12 col-md-12 mt-4">
            <div className="bannertext2">BabaBeard - Refund Policy</div>
            <div className="refundpolicy">
              Baba Beard always keeps their customers first, that is why Baba
              Beard is offering a 30 days return policy. That means you can
              return the product and get a refund within 30 days of time you
              have received.
            </div>

            <div className="policyheading">Product Condition:</div>
            <div className="policycontent">
              The product must be in the same condition with complete original
              packaging, tags and unused. You are also required to provide proof
              of purchase either in the form of receipt or in the form of order
              placement message.
            </div>
            <div className="policyheading">Damages and issues:</div>
            <div className="policycontent">
              Check the product immediately after you receive it, if the product
              is damaged or defective by any means, or if you have received the
              wrong parcel, contact Baba beard team immediately, so that we
              could evaluate and make this issue fix.
            </div>

            <div className="policyheading">Return Criteria:</div>
            <div className="policycontent">
              You have to connect with us at{" "}
              <a href="support@bababeard.com">Support@bababeard.com </a> to
              initiate the refund and return procedure. Your return request will
              be reviewed and will take up to 2 days, if accepted, you will be
              provided with instructions on how and where to return the product.
            </div>

            <div className="policyheading">Refund:</div>
            <div className="policycontent">
              Once we receive the product and finishes inspection, we’ll notify
              you whether the product is approved or not. After approval you
              will be refunded immediately via any payment method you would
              prefer. You can ask any query regarding the return procedure at
              support@bababeard.com
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default RefundPolicy;
