import React, { useEffect, useState } from "react";
import "../Style/Home.css";
import Scrollableimage from './ScrollSection'
import { Container, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productAction";
import Product from "../Components/Product";
import Message from "../Components/Message";
import Loader from "../Components/Loader";
import Services from "../Components/Services"
import Whatsapp from "../Components/Whatsapp"
import {Link} from 'react-router-dom'
import animation1 from '../Content/images/Animation/ani1.JPG';
import animation2 from '../Content/images/Animation/ani2.JPG'
import animation3 from '../Content/images/Animation/ani3.jpg'
import '../Style/Animation.css';


function Home() {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  
   
    

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      
      <Container fluid className="banner">
        <div className="banner-content">
          {/*<img src={Model} className="banner-model"/>
          <img src={Model2} className="banner-model"/>*/}
         
        
        
          <p className="banner-title">Start your Beard journey <br/>with the best thing in the Town</p>
        
        
          <button className="banner-btn">Shop Now</button>
          </div>
      </Container>
         
      
      <Container className="home-section-2">
        <Row className="justify-content-center home-section-2-row">
          <Col md={6} className=" home-section-2-col">
            <h2>Provide The Best</h2>
            <br />
            <h1>Beard Oil For You</h1>
            <div className="desc">
              <p>
                We provide the best Beard oil all over the world. We are the
                worldd best store for Beard Oil. You can buy our product without
                any hegitation because we always consus about our product
                quality and always maintain it properly so your can trust and
                this is our main goal we belive that...
              </p>
              <p>
                Some of our customer say’s that they trust us and buy our
                product without any hagitation because they belive us and always
                happy to buy our product.
              </p>
              <Link to="/about-us"><button>Read More</button></Link>
            </div>
          </Col>
          <Col lg={3} xl={3} md={12} sm={12} xs={12} className="anicol">
        <img className="an1" src={animation1}/> 
        <img  className="an2" src={animation2}/>
 
        
        </Col>

        <Col lg={3} xl={3} md={12} sm={12} xs={12} className="anicol">
 
        <img  className="an3" src={animation3}/>
        
        </Col>
        </Row>
      </Container>
      <Container fluid className="home-section-3">
        <Row className="justify-content-space-between home-section-3-row">
          <Col lg={6} md={12} sm={12} xs={12} className="home-section-3-col">
            <div className="content">
              <h5>Grow it</h5>
              <h1>Just starting ?</h1>
              <Link to="/product/6036b14c4205e327c86d3223"><button>Try a growth kit</button></Link>
            </div>
          </Col>

          <Col lg={6} md={12} sm={12} xs={12} className="home-section-3-col-2">
            <div className="content">
              <h5>Groom it</h5>
              <h1>
                Just <br />
                Shine ?
              </h1>
             <Link to="/product/6037e72d5c439c1fc83e3a94"> <button>Try a grooming kit</button></Link>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="home-section-4">
        {loading ? (
          <h2>
            <Loader />
          </h2>
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Row className="justify-content-center home-section-4-row" id="productContainer">

            <Col xl={12} lg={12} sm={12} md={12} xs={12} className="home-section-4-col">
              <h2>Our Products</h2>
              <p>
                Some of our customers say that they trust us and buy our product
                without any hesitation because they believe us and always happy
                to buy our product.
              </p>
            </Col>
            {products.map((product) => (
              <Col sm={12} md={4} lg={4} xl={4} xs={12} key={product._id}>
                <Product product={product} />
                
              </Col>
              
            ))}
          </Row>
        )}
      </Container>
      <Scrollableimage/>
      <div className="elfsight-app-aebaa9c2-8a41-4219-af28-da4278c779c7"></div>
      <div className="hidden"></div>
      <Services />
      <Whatsapp/>
      
      {/*<Container fluid className="dvnav">
        <Row className="justify-content-between">
            <div className="col-lg-5 col-sm-12 col-md-6 navbarcontent1">
                <ul>
                    <li><a href="landingpageBB.html">Home</a> </li>
                    <li> <a href="About.html" target="_blank">About</a></li>
                    <li> <a href="Shop.html" target="_blank">Shop</a></li>
                    <li> <a href="FAQS.html" target="_blank">FAQS</a> </li>
                    <li> <a href="Ingredients.html" target="_blank">Ingredients</a></li>
                    <li> <a href="Blogs.html">Blogs</a></li>
                </ul>
            </div>
    
            <div className="col-lg-5 col-sm-12 col-md-4 navbarcontent2">
                <a href="landingpageBB.html"> <img className="nav2img" src={NavbarLogo}/> </a>             </div>
    
            <div className="col-lg-2 col-sm-12 col-md-2 btnnav">
                <button className="btnnav1"> <img src={LoginAvatar} width="20px" height="20px"/>  Login</button>
                <button className="btnnav2">Signup</button>
            </div>
    
        </Row>
    
    </Container>*/}

      {/*<Container>
        <Row>
          <div className="col-lg-12 col-sm-12 col-md-12 quote">
            <img className="quoteimg" src={BackgroundBeard} />
            <div className="quotefont1 centered">Quote</div>
            <div className="quotefont2 centeredquote2">
              "GROWING A BEARD IS A HABIT, MOST NATURAL SCRIPTURAL, MANLY AND
              BENEFICIAL."
              <br />
              -C.H. SPURGEON
            </div>
          </div>
        </Row>
      </Container>

      <Container>
        <Row>
          <div className="col-lg-12 col-sm-12 col-md-12 quote">
            <img className="quoteimg" src={BackgroundBeard} />
            <div className="quotefont1 centered">WHY BABA BEARD?</div>
            <div className="quotefont2 centered2">
              Our beard oil contains 100% Organic Oils which are free from any
              harmful chemicals. We have designed a step by step procedure of
              growing your beard in 3 stages. <br />
              ACTIVATE - FILL PATCHES - NOURISH
            </div>
          </div>
        </Row>
      </Container>
      <Container fluid className="fullimg"></Container>

      <Container fluid className="organic">
        <Row>
          <div className="col-lg-12 col-sm-12 col-md-12">
            <div className="organicheading">100% ORGANIC</div>
            <div className="organiccontent">
              The oils used in our products are 100% pure and free from any
              harmful chemicals. Inorganic materials can cause itchiness and
              change the color of your beard to white therefore we have
              refrained from using it in our Beard Oils
            </div>
          </div>
        </Row>
      </Container>

      <Container fluid>
        <Row>
          <div className="col-lg-12 col-sm-12 col-md-12">
            <div className="organicheading"> PRODUCTS </div>
          </div>
        </Row>
      </Container>

      <Container>
        <Row>
          <div className="col-lg-6 col-sm-12 col-md-6">
            <img className="VariantImg1" src={ActivateVariant} />
            <div className="Variantbtn1div">
              <button className="Addtocartbtn">
                Add to Cart <br />
                <img className="mustacheAddtoCart" src={MustacheAddToCart} />
              </button>
            </div>
          </div>

          <div className="col-lg-6 col-sm-12 col-md-6 Productdiv">
            <div className="Variantheading"> Activate</div>
            <div>
              <img className="Variantimg2" src={BeardTexture} />

              <div className="Variantcontent centered92">
                <ul>
                  <li>
                    {" "}
                    Those who lack beard hair follicles, need a product that can
                    stimulate growth of hair follicles and get absorbed in the
                    skin to facilitate beard growth.
                  </li>{" "}
                  <br />
                  <li>
                    Our Árvore Aquilaria Activating Oil contains Eucalyptus oil
                    which is one of the best oils to accelerate beard growth
                  </li>
                  <br />
                  <li>
                    Stimulating beard Hair follicles and making edges soft by
                    providing power of Rosemary essential Oil.
                  </li>
                  <br />
                  <li>
                    Providing the essence of a fresh hay day to boost your
                    tranquility.{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Row>
        <Row>
          <div className="col-lg-6 col-sm-12 col-md-6 Productfill1div">
            <div className="Variantheadingfill"> Fill Patches</div>
            <div>
              <img className="Variantimg1fill" src={BeardTexture} />

              <div className="Variantcontent centered92">
                <ul>
                  <li>
                    {" "}
                    Grama Fresca Oil for filling patches of beard, helps to make
                    your beard complete by removing patches off your beard.
                  </li>{" "}
                  <br />
                  <li>
                    Having Tea tree Oil, Fill Patches Oil helps to unclog pores,
                    protect facial hair, and stimulate facial hair growth.
                  </li>
                  <br />
                  <li>
                    It feels non-greasy because it has the quality of absorption
                    in your skin rapidly.
                  </li>{" "}
                  <br />
                  <li> Having Calm and peaceful Lavender essence.</li>
                  <br />
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 col-md-6 Productfill2div">
            <img className="Variantimg2fill" src={FillPatchesVariant} />
            <div className="Variantbtn2divfill">
              <button className="Addtocartbtn">
                Add to Cart <br />
                <img className="mustacheAddtoCart" src={MustacheAddToCart} />
              </button>
            </div>
          </div>
        </Row>

        <Row>
          <div className="col-lg-6 col-sm-12 col-md-6">
            <img className="VariantImg1" src={NourishVariant} />

            <div className="Variantbtn1div">
              <button className="Addtocartbtn">
                Add to Cart <br />
                <img className="mustacheAddtoCart" src={MustacheAddToCart} />
              </button>
            </div>
          </div>

          <div className="col-lg-6 col-sm-12 col-md-6 Productdiv">
            <div className="Variantheading"> Nourish</div>
            <div>
              <img className="Variantimg2" src={BeardTexture} />
              <div className="Variantcontent centered92">
                <ul>
                  <li>
                    To tame the mane you proudly own, you need some whip in the
                    form of Our Sérein épicés Nourishing Oil.
                  </li>
                  <br />
                  <li>
                    Having Jojoba Oil it protects your eard from sun, prevent
                    moisture and protein loss to make your beard thick.
                  </li>
                  <br />
                  <li>
                    Also contain Sweet Almond’s Oil to maintain the PH Level of
                    skin under the beard and to reduce beard itch and dryness.
                  </li>
                  <br />
                  <li>
                    Having earthy essence can make your beard feel and smell
                    exceptional.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Row>

        <Row>
          <div className="col-lg-12 col-sm-12 col-md-12 Howtoapplyheading">
            <div className="Howtoheadingfont1">How to apply</div>
          </div>
        </Row>
      </Container>

      <Container>
        <Row className="justify-content-around applypicsdiv">
          <div className="col-lg-2 col-sm-12 col-md-2 dv11">
            <div className="Howtosubheading">Lorem Ipsum</div>
          </div>
          <div className="col-lg-2 col-sm-12 col-md-2 dv12">
            <div className="Howtosubheading">Lorem Ipsum</div>
          </div>
          <div className="col-lg-2 col-sm-12 col-md-2 dv13">
            <div className="Howtosubheading">Lorem Ipsum</div>
          </div>
        </Row>
        <Row>
          <div className="col-lg-12 col-sm-12 col-md-12 quotefont2 mb-4">
            Rub our beard oil in your palm and then apply it on your beard.
            Massage it properly to evenly spread the oil underneath and to
            increase blood circulation to stimulate hair growth. The quantity of
            the oil should be:
            <li>3-6 drops for light or no beard</li>
            <li>10 drops for stubble beard</li>
            <li>20 drops for a fully grown heavy beard </li>
          </div>
        </Row>
      </Container>

      <Container fluid>
        <Row>
          <div className="col-lg-12 col-sm-12 col-md-12">
            <div className="ingredientfont1">Ingredients</div>
          </div>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <div className="col-lg-4 col-sm-12 col-md-4 ActivateIngredient">
            <img className="IngredientImage" src={ActivateVariant} />
            <div className="Ingredientimgoverlay Ingredientimgoverlay--blur">
              <div className="IngredientTitle">Activate</div>

              <ul className="IngredientDescription">
                <li>
                  {" "}
                  <b>
                    <u>Argan Oil</u>{" "}
                  </b>
                  : It will make hair soft and shiny, and prevent skin
                  inflammation, acne and flaky skin.
                </li>
                <li>
                  {" "}
                  <b>
                    <u>Jojoba Oil</u>
                  </b>
                  : Extremely nourishing to damaged skin and hair, helps to
                  prevent protein and moisture loss in hair, protects against
                  the sun with a thin lipid layer.
                </li>
                <li>
                  {" "}
                  <b>
                    <u>Eucalyptus</u>
                  </b>
                  : Stimulates hair follicles and makes edges of hair soft.
                  Gives your beard a pleasant smell.
                </li>
                <li>
                  {" "}
                  <b>
                    <u>Rosemary</u>
                  </b>
                  : Gets easily absorbed into your bloodstream and stimulates
                  hair follicles.
                </li>
                <li>
                  {" "}
                  Other carrier oils and essential oils are used to increase
                  hair growth, stimulate hair follicles and add aroma.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 col-md-4 FillPatchesIngredient">
            <img className="IngredientImage" src={FillPatchesVariant} />
            <div className="Ingredientimgoverlay Ingredientimgoverlay--blur">
              <div className="IngredientTitle">Fill Patches</div>

              <ul className="IngredientDescription">
                <li>
                  {" "}
                  <b>
                    <u>Argan Oil</u>{" "}
                  </b>
                  : It will make hair soft and shiny, and prevent skin
                  inflammation, acne and flaky skin.
                </li>
                <li>
                  {" "}
                  <b>
                    <u>Castor Oil</u>
                  </b>
                  : seals in moisture to thicken hair, prevent breakage, and
                  split ends. It also has antibacterial, anti-inflammatory and
                  antifungal properties which can detoxify and treat infection
                  while stimulating blood circulation to the skin.
                </li>
                <li>
                  {" "}
                  <b>
                    <u>Rosemary</u>
                  </b>
                  : Gets easily absorbed into your bloodstream and stimulates
                  hair follicles.
                </li>
                <li>
                  {" "}
                  <b>
                    <u>Tea Tree</u>
                  </b>
                  : Protects facial hair, helps to unclog pores, gives your hair
                  a non-greasy and healthy look
                </li>
                <li>
                  {" "}
                  Other carrier oils and essential oils are used to increase
                  hair growth, stimulate hair follicles and add aroma.
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-sm-12 col-md-4 NourishIngredient">
            <img className="IngredientImage" src={NourishVariant} />
            <div className="Ingredientimgoverlay Ingredientimgoverlay--blur">
              <div className="IngredientTitle">Nourish</div>

              <ul className="IngredientDescription">
                <li>
                  {" "}
                  <b>
                    <u>Jojoba Oil</u>
                  </b>
                  : Extremely nourishing to damaged skin and hair, helps to
                  prevent protein and moisture loss in hair, protects against
                  the sun with a thin lipid layer.
                </li>
                <li>
                  {" "}
                  <b>
                    <u>Sweet Almond Oil</u>
                  </b>
                  :It helps normalize the pH levels of the skin under the beard
                  and is known for its ability to soothe inflamed skin,
                  preventing beard itch while conditioning hair.
                </li>
                <li>
                  {" "}
                  <b>
                    <u>Peppermint</u>
                  </b>
                  : It helps to stimulate better blood flow beneath the skin
                  which brings more nutrients to the hair follicles.
                </li>
                <li>
                  {" "}
                  <b>
                    <u>Lavender</u>
                  </b>
                  : It has a calming fragrance and helps to grow hair thicker
                  and faster.
                </li>
                <li>
                  {" "}
                  Other carrier oils and essential oils are used to increase
                  hair growth, stimulate hair follicles and add aroma.
                </li>
              </ul>
            </div>
          </div>
        </Row>
      </Container>

      <Container fluid>
        <Row>
          <div className="col-lg-12 col-sm-12 col-md-12 HowtoApply">
            <div className="Howtoheadingfont1">Feedbacks</div>
          </div>
        </Row>
      </Container>

      <Container fluid>
        <div className="col-lg-12 col-sm-12 col-md-12 Sliderdiv">
          <div id="demo" className="carousel slide" data-ride="carousel">
            <ul className="carousel-indicators">
              <li data-target="#demo" data-slide-to="0" className="active"></li>
              <li data-target="#demo" data-slide-to="1"></li>
              <li data-target="#demo" data-slide-to="2"></li>
            </ul>

            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={SlideShowPic1}
                  alt="feeedback"
                  width="1200"
                  height="400"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={SlideShowPic2}
                  alt="feeedback"
                  width="1200"
                  height="400"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={SlideShowPic3}
                  alt="feeedback"
                  width="1200"
                  height="400"
                />
              </div>
            </div>

            <a className="carousel-control-prev" href="#demo" data-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </a>
            <a className="carousel-control-next" href="#demo" data-slide="next">
              <span className="carousel-control-next-icon"></span>
            </a>
          </div>
        </div>
      </Container>*/}
    </div>
  );
}
export default Home;
