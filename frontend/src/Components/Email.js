import React from "react";
import "../Style/Email.css";
import {Container, Col, Row} from 'react-bootstrap';
function Email() {
  return (
<div>

<Container fluid className="EmailCont">
<Row className="justify-content-center Emaildiv">

<Col lg={12} xl={12} md={8} sm={12} xs={12} className="Email-sec-1">
   <div className="sec1"> LET'S KEEP IN TOUCH</div>
   <div className="sec2">Get email offers & the latest news from us</div>
</Col>

<Col lg={6} xl={5} md={7} sm={9} xs={10}>
<div className="Input-div"> 
<input
  
  className="Email-input" type="email"id="email" name="email" placeholder="Type your email" />
 </div>



   <div className="Button-div">
       
   <button className="Submit-button"> Signup </button>
   </div>


</Col>

</Row>



</Container>

</div>

  );}

export default Email;




