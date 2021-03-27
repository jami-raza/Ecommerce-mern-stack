import React , { useState } from "react";
import "../Style/Survey.css";
import "../Style/Shop.css";
import {Container, Col, Row,Modal,Button,handleClose} from 'react-bootstrap';
import ActivateVariant from "../Content/images/ingredient/ActivateBottle2.png";
import FillPatchesVariant from "../Content/images/ingredient/FillPatchesBottle2.png";
import NourishVariant from "../Content/images/ingredient/NourishBottle2.png";

import ActivateMan from "../Content/images/Survey/ActivateMan.png";
import FillPatchesMan from "../Content/images/Survey/FillPatchesMan.png";
import NourishMan from "../Content/images/Survey/NourishMan.png";


function Survey() {
 
  
  
    const [activate, setActivate] = useState(false);
    const [fillpatches, setFillPatches] = useState(false);
    const [nourish, setNourish] = useState(false);

    const handleClose = () => setActivate(false);
    const handleClose2 = () => setFillPatches(false);
    const handleClose3 = () => setNourish(false);
    return (
      <div>
     
        <Container fluid>
          <Row>
            <div className="col-lg-12 col-sm-12 col-md-12">
              <div className="SurveyTitle">Select Your Category</div>
 
            </div>
          </Row>
        </Container>
     
       
            
        <Container>
          <Row className="justify-content-center">
          <Col lg={4} xl={4} md={6} sm={8} xs={12} className="dvSurvey1">
            
            <Container className="contimg">
            <img className="Surveyimg" src={ActivateMan} /> 
            
              <div className="dvsurveyfont1">
                  
                   <button className="btnsurvey1" onClick={() => setActivate(true)}> Activate 
              </button> 
              </div>

                <div className="surveycontent">
                Activate <br/>
                   Our original blend of Morrocan Argan Oil, Avocado Oil, Jojoba Oil, Eucalyptus 
                   and Vitamin E to accelerate your beard growth by stimulating your facial hair follicles.
                </div>

              </Container>
              
              <div className="">
                <div className="dv9imgshopdescription">
                
                </div>
                
              </div>
              
         
              <Modal
                size="xl"
                show={activate}
                onHide={() => setActivate(false)}
                aria-labelledby="example-modal-sizes-title-sm"
              >
                <Modal.Header className="closebutton" closeButton>
                 
                </Modal.Header>
                <Modal.Body>
                    <Container>
                    <Row className="justify-content-center modalsurveyrow">
                   
                    <Col lg={5} md={12} sm={12} className="ModalPic-col"> 
                          <img className="dv9surveyimgmodal" src={ActivateVariant} />
                          <div className="Modal1-Des">
                          <div class="modal1-heading">Arvore Aquilaria </div>
                          <hr/>
                          <div class="modal1-subhead">Start your beard journey by activating the beard hair follicles </div>

                          </div>
                          </Col>
                        <Col lg={5} md={12} sm={12} className="ModalForm-col"> 
                          <div className="Surveyfontproduct">Signup</div>
                         
                         <div className="Form-div">
                          
                          <label className="lbltext" for="fname">Full Name</label><br/>
                          <input  className="lblinput" type="text" id="fname" name="fname"/> 
                          <br/><br/><br/>
                          <label className="lbltext" for="Email">Email</label><br/>
                          <input  className="lblinput" type="text" id="Email" name="Email"/> 
                          <br/> <br/><br/>
                          <label className="lbltext" for="Password">Password</label><br/>
                          <input  className="lblinput" type="Password" id="Password" name="Password"/>
                           <br/><br/><br/>
                          <label className="lbltext" for="RepeatPassword">Repeat Password</label><br/>
                          <input  className="lblinput" type="Password" id="RepeatPassword" name="RepeatPassword"/>
                           <br/><br/><br/>
                          <label className="lbltext" for="City">City</label><br/>
                          <input  className="lblinput" type="text" id="City" name="City"/> 
                          <br/> <br/>
                        
                          <input   type="checkbox" id="terms" name="terms" value="terms"/>
                          <label className="lbltextterm" for="terms"> I agree to the terms of user</label> <br/>
                <div className="btndivModal">
                    <Button className="btnSignupModal">
                      Signup
                    </Button> </div>
                         </div>
                          
                        </Col>
                      </Row>
                      </Container>
                </Modal.Body>

                <Modal.Footer>
                  
                <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
                </Modal.Footer>
              </Modal>
              



            </Col>
             <Col lg={4} xl={4} md={6} sm={8} xs={12} className="dvSurvey1">

             <Container className="contimg">
             <img className="Surveyimg" src={FillPatchesMan} />

              <div className="dvsurveyfont1">
                   <button className="btnsurvey1"  data-toggle="modal"
                    data-target="#fillpatches" onClick={() => setFillPatches(true)}> Fill Patches 
              </button></div>

              <div className="surveycontent">
                   Fill Patches  <br/>
                   Fill patches contains vitamins and compounds to help return your skin to optimal health. 
                   This will make your beard healthier and foster a prime hair growth environment.
                </div>
              </Container>

              <div className="">
                <div className="dv9imgshopdescription">
                 
                </div>
              </div>
              
            <Modal
                size="xl"
                show={fillpatches}
                onHide={() => setFillPatches(false)}
                aria-labelledby="example-modal-sizes-title-sm"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-modal-sizes-title-sm">
                  Fill Patches - Grama Fresca
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Container>
                    <Row className="justify-content-center modalsurveyrow">
                    <Col lg={5} md={12} sm={12} className="ModalPic-col"> 
                          <img className="dv9surveyimgmodal" src={FillPatchesVariant} />
                          <div className="Modal1-Des">
                          <div class="modal1-heading">Grama Fresca</div>
                          <hr/>
                          <div class="modal1-subhead"> Rough Patches are equally not attractive for beards too! </div>

                          </div>
                          </Col>
                        <Col lg={5} md={12} sm={12} className="ModalForm-col"> 
                          <div className="Surveyfontproduct">Signup</div>
                         
                         <div className="Form-div">
                          
                          <label className="lbltext" for="fname">Full Name</label><br/>
                          <input  className="lblinput" type="text" id="fname" name="fname"/> 
                          <br/><br/><br/>
                          <label className="lbltext" for="Email">Email</label><br/>
                          <input  className="lblinput" type="text" id="Email" name="Email"/> 
                          <br/> <br/><br/>
                          <label className="lbltext" for="Password">Password</label><br/>
                          <input  className="lblinput" type="Password" id="Password" name="Password"/>
                           <br/><br/><br/>
                          <label className="lbltext" for="RepeatPassword">Repeat Password</label><br/>
                          <input  className="lblinput" type="Password" id="RepeatPassword" name="RepeatPassword"/>
                           <br/><br/><br/>
                          <label className="lbltext" for="City">City</label><br/>
                          <input  className="lblinput" type="text" id="City" name="City"/> 
                          <br/> <br/>
                        
                          <input   type="checkbox" id="terms" name="terms" value="terms"/>
                          <label className="lbltextterm" for="terms"> I agree to the terms of user</label> <br/>
                <div className="btndivModal">
                    <Button className="btnSignupModal">
                      Signup
                    </Button> </div>
                         </div>
                          
                        </Col>
                      </Row>
                      </Container>
                </Modal.Body>

                <Modal.Footer>
                  
                  <Button variant="danger" onClick={handleClose2}>
              Close
            </Button>
                  </Modal.Footer>
              </Modal>
            </Col>
           
  
            <Col lg={4} xl={4} md={6} sm={8} xs={12} className="dvSurvey1">
          
            <Container className="contimg">
            <img className="Surveyimg" src={NourishMan} />

              <div className="dvsurveyfont1"> 
               <button className="btnsurvey1" data-toggle="modal" data-target="#nourish" 
               onClick={() => setNourish(true)} >
                   Nourish
                   
                  </button></div>
                  <div className="surveycontent">
                 Nourish <br/>
                 Your grown beard needs proper care and attention. 
                 Nourish Oil helps nourishes skin underneath beard, Makes beard super soft & shiny, Prevents premature graying.
                </div>
           </Container>
              <div className="">
                <div className="dv9imgshopdescription">
                 
                </div>
              </div>
               
            <Modal
                size="xl"
                show={nourish}
                onHide={() => setNourish(false)}
                aria-labelledby="example-modal-sizes-title-sm"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-modal-sizes-title-sm">
                  Nourish - Serien Epice
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Container>
                <Row className="justify-content-center modalsurveyrow">
                    <Col lg={5} md={12} sm={12} className="ModalPic-col"> 
                          <img className="dv9surveyimgmodal" src={NourishVariant} />
                          <div className="Modal1-Des">
                          <div class="modal1-heading">Serein Epices</div>
                          <hr/>
                          <div class="modal1-subhead"> Own your Beard with pride and give the care it Needs! </div>

                          </div>
                          </Col>
                      <Col lg={5} md={12} sm={12} className="ModalForm-col"> 
                          <div className="Surveyfontproduct">Signup</div>
                         
                         <div className="Form-div">
                          
                          <label className="lbltext" for="fname">Full Name</label><br/>
                          <input  className="lblinput" type="text" id="fname" name="fname"/> 
                          <br/><br/><br/>
                          <label className="lbltext" for="Email">Email</label><br/>
                          <input  className="lblinput" type="text" id="Email" name="Email"/> 
                          <br/> <br/><br/>
                          <label className="lbltext" for="Password">Password</label><br/>
                          <input  className="lblinput" type="Password" id="Password" name="Password"/>
                           <br/><br/><br/>
                          <label className="lbltext" for="RepeatPassword">Repeat Password</label><br/>
                          <input  className="lblinput" type="Password" id="RepeatPassword" name="RepeatPassword"/>
                           <br/><br/><br/>
                          <label className="lbltext" for="City">City</label><br/>
                          <input  className="lblinput" type="text" id="City" name="City"/> 
                          <br/> <br/>
                        
                          <input   type="checkbox" id="terms" name="terms" value="terms"/>
                          <label className="lbltextterm" for="terms"> I agree to the terms of user</label> <br/>
                <div className="btndivModal">
                    <Button className="btnSignupModal">
                      Signup
                    </Button> </div>
                         </div>
                          
                        </Col>
                    </Row>
                    </Container>
                </Modal.Body>

                <Modal.Footer>
                  
                  <Button variant="danger" onClick={handleClose3}>
              Close
            </Button>
                  </Modal.Footer>
              </Modal>
            </Col>
            <div className="modal fade dvmodal" id="nourish">
              <div className="modal-dialog  modal-dialog-centered modal-lg">
                <div className="modal-content">
                  <div className="modal-body">
                   
                  </div>
  
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </Container>
 
  


</div>

  );}
  export default Survey;


