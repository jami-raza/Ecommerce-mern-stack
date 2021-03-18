import React, { useState } from "react";
import { Container, Col, Row, Modal } from "react-bootstrap";
import "../Style/Shop.css";
import "../Style/Ingredients.css";
import ActivateVariant from "../Content/images/ingredient/ActivateW.R..png";
import FillPatchesVariant from "../Content/images/ingredient/FillPatchesW.R..png";
import NourishVariant from "../Content/images/ingredient/NourishW.R..png";
import ArganOil from "../Content/images/ingredient/argan.png";
import CastorOil from "../Content/images/ingredient/castor_oil.png";
import Eucalyptus from "../Content/images/ingredient/eucalyptus.png";
import JojobaOil from "../Content/images/ingredient/jojoba_oil.png";
import Lavender from "../Content/images/ingredient/lavendar.png";
import Peppermint from "../Content/images/ingredient/peppermint_oil_.png";
import Rosemary from "../Content/images/ingredient/rosemary_oil_seed.png";
import SweetAlmond from "../Content/images/ingredient/sweet_almond_oil.png";
import TeaTree from "../Content/images/ingredient/teatree.png";
 
import {  } from "module";
function Ingredients() {
  const [activate, setActivate] = useState(false);
  const [fillpatches, setFillPatches] = useState(false);
  const [nourish, setNourish] = useState(false);
  return (
    <div>
     
      <Container fluid>
        <Row>
          <div className="col-lg-12 col-sm-12 col-md-12">
            <div className="IngredientTitle">Products</div>
          </div>
        </Row>
      </Container>
   
     
          
      <Container>
        <Row className="justify-content-center">
        <Col lg={4} xl={4} md={6} sm={8} xs={8} className="dvshoping1">
            <div className="dvshopfont1">Activate <br/> Arvore Aquilaria </div>
            <img className="dv9shopingimg1" src={ActivateVariant} />
            <div className="Ingredientimgoverlay Ingredientimgoverlay--blur">
              <div className="dv9imgshopdescription">
                <button className="btnshop1" onClick={() => setActivate(true)}>
                  Ingredients <br />
                  <i className="fa fa-eye"></i>
                </button>
              </div>
            </div>
            <Modal
              size="xl"
              show={activate}
              onHide={() => setActivate(false)}
              aria-labelledby="example-modal-sizes-title-sm"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm">
                Activate - Beard Oil
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <Container>
                      <Row className="justify-content-around">
                       
                      <Col lg={6} md={6} sm={6} xs={12} className="act1">
                          <p className="Title">Argan Oil </p>
                          <p className="Description">
                            It will make hair soft and shiny, and prevent skin
                            inflammation, acne and flaky
                          </p>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={12} className="act2">
                          <img className="ArganOilImg" src={ArganOil} />
                        </Col>
                      </Row>

                      <Row className="justify-content-around">
                      <Col lg={6} md={6} sm={6} xs={12} className="act1">
                          <p className="Title">Jojoba Oil</p>
                          <p className="Description">
                            Extremely nourishing to damaged skin and hair, helps
                            to prevent protein and moisture loss in hair,
                            protects against the sun with a thin lipid layer.
                          </p>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={12} className="act2">
                          <img className="JojobaOil" src={JojobaOil} />
                        </Col>
                      </Row>

                      <Row className="justify-content-around">
                      <Col lg={6} md={6} sm={6} xs={12} className="act1">
                          <p className="Title">Eucalyptus</p>
                          <p className="Description">
                            Stimulates hair follicles and makes edges of hair
                            soft. Gives your beard a pleasant smell.
                          </p>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={12} className="act2">
                          <img className="EucalyptusImg" src={Eucalyptus} />
                        </Col>
                      </Row>

                      <Row className="justify-content-around">
                      <Col lg={6} md={6} sm={6} xs={12} className="act1">
                          <p className="Title">Rosemary</p>
                          <p className="Description">
                            Gets easily absorbed into your bloodstream and
                            stimulates hair follicles.
                          </p>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={12} className="act2">
                          <img className="RosemaryImg" src={Rosemary} />
                        </Col>
                      </Row>
                    </Container>
              </Modal.Body>
            </Modal>
            
          </Col>
           <Col lg={4} xl={4} md={6} sm={8} xs={8} className="dvshoping2">
            <div className="dvshopfont1">Fill Patches <br/> Grama Fresca</div>
            <img className="dv9shopingimg1" src={FillPatchesVariant} />
            <div className="Ingredientimgoverlay Ingredientimgoverlay--blur">
              <div className="dv9imgshopdescription">
                <button
                  className="btnshop1"
                  data-toggle="modal"
                  data-target="#fillpatches"
                  onClick={() => setFillPatches(true)} 
                >
                   Ingredients <br /> <i className="fa fa-eye"></i>
                </button>
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
                  <Row>
                      <div className="col-lg-6 col-sm-12 col-md-6">
                        <img className="dv9shopingimg1" src={fillpatches} />
                      </div>
                      <div className="container">
            
            
            <Row className="justify-content-around">
            <Col lg={6} md={6} sm={6} xs={12} className="act1">
                    <p className="Title">Argan Oil </p>
                    <p className="Description">It will make hair soft and shiny, and prevent skin inflammation,
                        acne and flaky</p>
                </Col>
                <Col lg={6} md={6} sm={6} xs={12} className="act2">
                    <img className="ArganOilImg" src={ArganOil}/>
                </Col>
            </Row>


            <Row className="justify-content-around">
            <Col lg={6} md={6} sm={6} xs={12} className="act1">
                    <p className="Title">Castor Oil</p>
                    <p className="Description">Seals in moisture to thicken hair, prevent breakage, and split
                        ends. It also has
                        antibacterial, anti-inflammatory and antifungal properties which can detoxify and treat
                        infection while stimulating blood circulation to the skin.s</p>
                </Col >
                <Col lg={6} md={6} sm={6} xs={12} className="act2">
                    <img className="CastorOil"src={CastorOil}/>
                </Col>
            </Row>



            <Row className="justify-content-around">
            <Col lg={6} md={6} sm={6} xs={12} className="act1">
                    <p className="Title">Rosemary</p>
                    <p className="Description">
                        Gets easily absorbed into your bloodstream and stimulates hair
                        follicles.
                    </p>
                </Col>
                <Col lg={6} md={6} sm={6} xs={12} className="act2">
                    <img className="RosemaryImg" src={Rosemary}/>
                </Col>
            </Row>

            <Row className="justify-content-around">
            <Col lg={6} md={6} sm={6} xs={12} className="act1">
                    <p className="Title">Tea Tree</p>
                    <p className="Description">
                        Protects facial hair, helps to unclog pores, gives your hair a
                        non-greasy and
                        healthy look.
                    </p>
                </Col>
                <Col lg={6} md={6} sm={6} xs={12} className="act2">
                    <img className="TeatreeImg" src={TeaTree}/>
                </Col>
            </Row>





        </div>

                    </Row>
              </Modal.Body>
            </Modal>
          </Col>
         

          <Col lg={4} xl={4} md={6} sm={8} xs={8} className="dvshoping3">
            <div className="dvshopfont1">Nourish <br/> Serein Epice</div>
            <img className="dv9shopingimg1" src={NourishVariant} />
            <div className="Ingredientimgoverlay Ingredientimgoverlay--blur">
              <div className="dv9imgshopdescription">
                <button
                  className="btnshop1"
                  data-toggle="modal"
                  data-target="#nourish"
                  onClick={() => setNourish(true)}
                >
                  {" "}
                  Ingredients <br /> <i className="fa fa-eye"></i>
                </button>
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
                Nourish - Serein Epice
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <Row>
                  
                                <div className="container">


                                    <Row className="justify-content-around">
                                       <Col lg={6} md={6} sm={6} xs={12} className="act1">
                                        
                                            <p className="Title">Jojoba Oil</p>
                                            <p className="Description">Extremely nourishing to damaged skin and hair, helps to prevent
                                                protein and moisture loss in hair, protects against the sun with a thin lipid layer.</p>
                                        </Col>
                                        <Col lg={6} md={6} sm={6} xs={12} className="act2">
                                            <img className="JojobaOil" src={JojobaOil}/>
                                        </Col>
                                    </Row>
                    
                                    <Row className="justify-content-around">
                                    <Col lg={6} md={6} sm={6} xs={12} className="act1">
                                            <p className="Title">Sweet Almond Oil </p>
                                            <p className="Description">It helps normalize the pH levels of the skin under the beard
                                                and is known
                                                for its ability to soothe inflamed skin, preventing beard itch while conditioning hair.</p>
                                        </Col>
                                        <Col lg={6} md={6} sm={6} xs={12} className="act2">
                                            <img className="SweetAlmondOil" src={SweetAlmond} />
                                        </Col>
                                    </Row>
                    
                    
                    
                    
                    
                                    <Row className="justify-content-around">
                                    <Col lg={6} md={6} sm={6} xs={12} className="act1">
                                            <p className="Title">Peppermint</p>
                                            <p className="Description"> It helps to stimulate better blood flow beneath the skin which
                                                brings more
                                                nutrients to the hair follicles.</p>
                                        </Col>
                                        <Col lg={6} md={6} sm={6} xs={12} className="act2">
                                            <img className="PeppermintImg" src={Peppermint}/>
                                        </Col>
                                    </Row>
                    
                                    <Row className="justify-content-around">
                                    <Col lg={6} md={6} sm={6} xs={12} className="act1">
                                            <p className="Title">Lavender</p>
                                            <p className="Description">
                                                It has a calming fragrance and helps to grow hair thicker and
                                                faster.
                                            </p>
                                        </Col>
                                        <Col lg={6} md={6} sm={6} xs={12} className="act2">
                                            <img className="LavenderImg" src={Lavender}/>
                                        </Col>
                                    </Row>
                    
                    
                    
                                </div>
            
            
            
                            
                  </Row>
              </Modal.Body>
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
  );
}

export default Ingredients;