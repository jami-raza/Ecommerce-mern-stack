import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Navbar, Nav, Dropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../actions/userAction";
import Logo from "../Content/images/logo-white.png";
import Logo1 from "../Content/images/logo-black.png";
import mobLogo from "../Content/images/logo-white-mob.png";
import mobLogo1 from "../Content/images/logo-black-mob.png";
import "../Style/Header.css";
const Header = () => {
  const dispatch = useDispatch();
  const [show, handleShow] = useState(false);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <header>
      <Navbar className={`top-navbar ${show && "top-navbar-scroll"}`}>
        <Container fluid>
          <div className="header-row">
              
          <Nav.Link>
                <LinkContainer to="/about-us">
                  <p className={`nav-font ${show && "nav-font-scroll"}`}>
                    About us
                  </p>
                  </LinkContainer>
                </Nav.Link>
                
                <Nav.Link>
                <LinkContainer to="/shop">
                  <p className={`nav-font ${show && "nav-font-scroll"}`}>
                  
                    Shop
                  </p>
                  </LinkContainer>
                </Nav.Link>
                <Nav.Link>
                <LinkContainer to="/ingredient">
                  <p className={`nav-font ${show && "nav-font-scroll"}`}>
                  
                    Ingredients
                  </p>
                  </LinkContainer>
                </Nav.Link>
                <Nav.Link>
                <LinkContainer to="/faqs">
                  <p className={`nav-font ${show && "nav-font-scroll"}`}>
                    Faqs
                  </p>
                  </LinkContainer>
                </Nav.Link>

            <LinkContainer to="/">
              <Navbar.Brand className="brand-link">
                <img src={`${show ? Logo1 : Logo}`} alt="Baba Beard" />
              </Navbar.Brand>
            </LinkContainer>

            <LinkContainer to="/cart">
              <Nav.Link>
                <p className={`nav-font ${show && "nav-font-scroll"}`}>
                  <i className="fas fa-cart-arrow-down nav-icon"></i>Cart
                </p>
              </Nav.Link>
            </LinkContainer>

            {userInfo ? (
              <Dropdown>
                <Dropdown.Toggle
                  className={`custom-dropdown ${
                    show && "custom-dropdown-scroll"
                  }`}
                >
                  {userInfo.name}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <LinkContainer to="/profile">
                    <Dropdown.Item>
                      <p className="nav-font-scroll">Profile</p>
                    </Dropdown.Item>
                  </LinkContainer>
                  <Dropdown.Item onClick={logoutHandler}>
                    <p className="nav-font-scroll">Logout</p>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <LinkContainer to="/login">
                <Nav.Link>
                  <p className={`nav-font ${show && "nav-font-scroll"}`}>
                    <i className="far fa-user nav-icon"></i>Sign in
                  </p>
                </Nav.Link>
              </LinkContainer>
            )}
            {userInfo && userInfo.isAdmin && (
              <Dropdown>
                <Dropdown.Toggle
                  className={`custom-dropdown ${
                    show && "custom-dropdown-scroll"
                  }`}
                >
                  {userInfo.name}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <LinkContainer to="/admin/userlist">
                    <Dropdown.Item>
                      <p className={`nav-font ${show && "nav-font-scroll"}`}>
                        Users
                      </p>
                    </Dropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/productlist">
                    <Dropdown.Item>
                      <p className={`nav-font ${show && "nav-font-scroll"}`}>
                        Products
                      </p>
                    </Dropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/orderlist">
                    <Dropdown.Item>
                      <p className={`nav-font ${show && "nav-font-scroll"}`}>
                        Orders
                      </p>
                    </Dropdown.Item>
                  </LinkContainer>
                </Dropdown.Menu>
              </Dropdown>
            )}
          </div>
        </Container>
      </Navbar>
      <div className={`mob-nav ${show && "mob-nav-scroll"}`}>
        <div className="mob-nav-row">
          <div>
            <Dropdown>
              <Dropdown.Toggle
                className={`custom-dropdown ${
                  show && "custom-dropdown-scroll"
                }`}
              >
                Menu
              </Dropdown.Toggle>

              <Dropdown.Menu
                className={`menu-items ${show && "menu-items-scroll"}`}
              >
                <Nav.Link>
                <LinkContainer to="/about-us">
                  <p className={`nav-font ${show && "nav-font-scroll"}`}>
                    About us
                  </p>
                  </LinkContainer>
                </Nav.Link>
                
                <Nav.Link>
                <LinkContainer to="/shop">
                  <p className={`nav-font ${show && "nav-font-scroll"}`}>
                  
                    Shop
                  </p>
                  </LinkContainer>
                </Nav.Link>
                <Nav.Link>
                <LinkContainer to="/ingredient">
                  <p className={`nav-font ${show && "nav-font-scroll"}`}>
                  
                    Ingredients
                  </p>
                  </LinkContainer>
                </Nav.Link>
                <Nav.Link>
                <LinkContainer to="/faqs">
                  <p className={`nav-font ${show && "nav-font-scroll"}`}>
                    Faqs
                  </p>
                  </LinkContainer>
                </Nav.Link>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <LinkContainer to="/">
            <Navbar.Brand className="brand-link">
              <img src={`${show ? mobLogo1 : mobLogo}`} alt="Baba Beard" />
            </Navbar.Brand>
          </LinkContainer>
          <LinkContainer to="/cart">
            <Nav.Link>
              <p className={`nav-font ${show && "nav-font-scroll"}`}>
                <i className="fas fa-cart-arrow-down nav-icon"></i>
              </p>
            </Nav.Link>
          </LinkContainer>

          {userInfo ? (
            <Dropdown>
              <Dropdown.Toggle
                className={`custom-dropdown ${
                  show && "custom-dropdown-scroll"
                }`}
              >
                {userInfo.name}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <LinkContainer to="/profile">
                  <Dropdown.Item>
                    <p className="nav-font-scroll">
                      Profile
                    </p>
                  </Dropdown.Item>
                </LinkContainer>
                <Dropdown.Item onClick={logoutHandler}>
                  <p className="nav-font-scroll">Logout</p>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <LinkContainer to="/login">
              <Nav.Link>
                <p className={`nav-font ${show && "nav-font-scroll"}`}>
                  <i className="far fa-user nav-icon"></i>
                </p>
              </Nav.Link>
            </LinkContainer>
          )}
          {userInfo && userInfo.isAdmin && (
            <Dropdown>
              <Dropdown.Toggle
                className={`custom-dropdown ${
                  show && "custom-dropdown-scroll"
                }`}
              >
                {userInfo.name}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <LinkContainer to="/admin/userlist">
                  <Dropdown.Item>
                    <p className={`nav-font ${show && "nav-font-scroll"}`}>
                      Users
                    </p>
                  </Dropdown.Item>
                </LinkContainer>
                <LinkContainer to="/admin/productlist">
                  <Dropdown.Item>
                    <p className={`nav-font ${show && "nav-font-scroll"}`}>
                      Products
                    </p>
                  </Dropdown.Item>
                </LinkContainer>
                <LinkContainer to="/admin/orderlist">
                  <Dropdown.Item>
                    <p className={`nav-font ${show && "nav-font-scroll"}`}>
                      Orders
                    </p>
                  </Dropdown.Item>
                </LinkContainer>
              </Dropdown.Menu>
            </Dropdown>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
