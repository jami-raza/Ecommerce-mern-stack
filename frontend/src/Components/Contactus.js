import React from "react";
import "../Style/Policy.css";

function Contactus() {
  return (
    <div>
      <div class="container-fluid dv1"></div>

      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12 col-sm-12 col-md-12">
            <div class="bannertext2">BabaBeard - Contact</div>

            <div class="policyheading">Got any query?</div>
            <div class="policycontent">
              You can contact us at{" "}
              <a style={{color:'#2b2929'}} href="mailto:support@bababeard.com">Support@bababeard.com </a> or
              leave your message on <a style={{color:'#2b2929'}} href="mailto:babaBeard.bb@gmail.com">BabaBeard.bb@gmail.com </a>our team will respond
              to your query as quickly as possible. Don’t forget to connect with
              us on facebook at Baba Beard Instagram at Baba beard And twitter
              at Baba Beard.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contactus;
