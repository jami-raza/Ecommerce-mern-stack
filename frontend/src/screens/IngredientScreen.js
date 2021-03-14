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
              <div className="container">
                      <div className="row justify-content-around">
                        <div className="col-lg-6 col-sm-6 col-md-6 col-sm-6 col-xs-12 act1">
                          <p className="Title">Argan Oil </p>
                          <p className="Description">
                            It will make hair soft and shiny, and prevent skin
                            inflammation, acne and flaky
                          </p>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-md-6 col-sm-6 col-xs-12 act2">
                          <img className="ArganOilImg" src={ArganOil} />
                        </div>
                      </div>

                      <div className="row justify-content-around">
                        <div className="col-lg-6 col-sm-6 col-md-6 col-sm-6 col-xs-12 act1">
                          <p className="Title">Jojoba Oil</p>
                          <p className="Description">
                            Extremely nourishing to damaged skin and hair, helps
                            to prevent protein and moisture loss in hair,
                            protects against the sun with a thin lipid layer.
                          </p>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-md-6 col-sm-6 col-xs-12 act2">
                          <img className="JojobaOil" src={JojobaOil} />
                        </div>
                      </div>

                      <div className="row justify-content-around">
                        <div className="col-lg-6 col-sm-6 col-md-6 col-sm-6 col-xs-12 act1">
                          <p className="Title">Eucalyptus</p>
                          <p className="Description">
                            Stimulates hair follicles and makes edges of hair
                            soft. Gives your beard a pleasant smell.
                          </p>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-md-6 col-sm-6 col-xs-12 act2">
                          <img className="EucalyptusImg" src={Eucalyptus} />
                        </div>
                      </div>

                      <div className="row justify-content-around">
                        <div className="col-lg-6 col-sm-6 col-md-6 col-sm-6 col-xs-12 act1">
                          <p className="Title">Rosemary</p>
                          <p className="Description">
                            Gets easily absorbed into your bloodstream and
                            stimulates hair follicles.
                          </p>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-md-6 col-sm-6 col-xs-12 act2">
                          <img className="RosemaryImg" src={Rosemary} />
                        </div>
                      </div>
                    </div>
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
                  <div className="row">
                      <div className="col-lg-6 col-sm-12 col-md-6">
                        <img className="dv9shopingimg1" src={fillpatches} />
                      </div>
                      <div class="container">
            
            
            <div class="row justify-content-around">
                <div class="col-lg-6 col-sm-6 col-md-6 col-sm-6 col-xs-12  act1">
                    <p class="Title">Argan Oil </p>
                    <p class="Description">It will make hair soft and shiny, and prevent skin inflammation,
                        acne and flaky</p>
                </div>
                <div class="col-lg-4 col-sm-6 col-md-6 col-sm-6 col-xs-12  act2">
                    <img class="ArganOilImg" src={ArganOil}/>
                </div>
            </div>


            <div class="row justify-content-around">
                <div class="col-lg-6 col-sm-6 col-md-6 col-xs-12 act1">
                    <p class="Title">Castor Oil</p>
                    <p class="Description">Seals in moisture to thicken hair, prevent breakage, and split
                        ends. It also has
                        antibacterial, anti-inflammatory and antifungal properties which can detoxify and treat
                        infection while stimulating blood circulation to the skin.s</p>
                </div>
                <div class="col-lg-4 col-sm-6 col-md-6 col-xs-12  act2">
                    <img className="CastorOil"src={CastorOil}/>
                </div>
            </div>



            <div class="row justify-content-around">
                <div class="col-lg-6 col-sm-6 col-md-6 col-xs-12  act1">
                    <p class="Title">Rosemary</p>
                    <p class="Description">
                        Gets easily absorbed into your bloodstream and stimulates hair
                        follicles.
                    </p>
                </div>
                <div class="col-lg-4 col-sm-6 col-md-6 col-xs-12  act2">
                    <img class="RosemaryImg" src={Rosemary}/>
                </div>
            </div>

            <div class="row justify-content-around">
                <div class="col-lg-6 col-sm-6 col-md-6 col-xs-12  act1">
                    <p class="Title">Tea Tree</p>
                    <p class="Description">
                        Protects facial hair, helps to unclog pores, gives your hair a
                        non-greasy and
                        healthy look.
                    </p>
                </div>
                <div class="col-lg-4 col-sm-6 col-md-6 col-xs-12  act2">
                    <img class="TeatreeImg" src={TeaTree}/>
                </div>
            </div>





        </div>

                    </div>
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
                  
                                <div class="container">


                                    <div class="row justify-content-around">
                                        <div class="col-lg-6 col-sm-6 col-md-6 col-sm-6 col-xs-12 act1">
                                            <p class="Title">Jojoba Oil</p>
                                            <p class="Description">Extremely nourishing to damaged skin and hair, helps to prevent
                                                protein and moisture loss in hair, protects against the sun with a thin lipid layer.</p>
                                        </div>
                                        <div class="col-lg-6 col-sm-6 col-md-6 col-sm-6 col-xs-12 act2">
                                            <img class="JojobaOil" src={JojobaOil}/>
                                        </div>
                                    </div>
                    
                                    <div class="row justify-content-around">
                                        <div class="col-lg-6 col-sm-6 col-md-6 col-sm-6 col-xs-12 act1">
                                            <p class="Title">Sweet Almond Oil </p>
                                            <p class="Description">It helps normalize the pH levels of the skin under the beard
                                                and is known
                                                for its ability to soothe inflamed skin, preventing beard itch while conditioning hair.</p>
                                        </div>
                                        <div class="col-lg-6 col-sm-6 col-md-6 col-sm-6 col-xs-12 act2">
                                            <img className="SweetAlmondOil" src={SweetAlmond} />
                                        </div>
                                    </div>
                    
                    
                    
                    
                    
                                    <div class="row justify-content-around">
                                        <div class="col-lg-6 col-sm-6 col-md-6 col-sm-6 col-xs-12 act1">
                                            <p class="Title">Peppermint</p>
                                            <p class="Description"> It helps to stimulate better blood flow beneath the skin which
                                                brings more
                                                nutrients to the hair follicles.</p>
                                        </div>
                                        <div class="col-lg-6 col-sm-6 col-md-6 col-sm-6 col-xs-12 act2">
                                            <img class="PeppermintImg" src={Peppermint}/>
                                        </div>
                                    </div>
                    
                                    <div class="row justify-content-around">
                                        <div class="col-lg-6 col-sm-6 col-md-6 col-sm-6 col-xs-12 act1">
                                            <p class="Title">Lavender</p>
                                            <p class="Description">
                                                It has a calming fragrance and helps to grow hair thicker and
                                                faster.
                                            </p>
                                        </div>
                                        <div class="col-lg-6 col-sm-6 col-md-6 col-sm-6 col-xs-12 act2">
                                            <img class="LavenderImg" src={Lavender}/>
                                        </div>
                                    </div>
                    
                    
                    
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
