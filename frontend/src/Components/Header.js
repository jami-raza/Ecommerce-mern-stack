import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Container, Navbar, Nav, NavDropdown,Dropdown} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {logout} from '../actions/userAction'
import Logo from '../Content/images/logo-white.png'
import Logo1 from '../Content/images/logo-black.png'
import mobLogo from '../Content/images/logo-white-mob.png'
import mobLogo1 from '../Content/images/logo-black-mob.png'
import '../Style/Header.css'
const Header = () => {

    



    const dispatch = useDispatch()
    const [show, handleShow] = useState(false)
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = () => {
        dispatch(logout())
    }
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, [])
    return (
        
        <header >
        
        <Navbar className={`top-navbar ${show && "top-navbar-scroll"}`}>
        <Container fluid>
            <div className="header-row">
                
        <Nav.Link><p className={`nav-font ${show && "nav-font-scroll"}`}>About us</p></Nav.Link>
                    <Nav.Link><p className={`nav-font ${show && "nav-font-scroll"}`}>Shop</p></Nav.Link>
                    <Nav.Link><p className={`nav-font ${show && "nav-font-scroll"}`}>Ingredients</p></Nav.Link>
                    <Nav.Link><p className={`nav-font ${show && "nav-font-scroll"}`}>Faqs</p></Nav.Link>
                    
        <LinkContainer to="/">
        <Navbar.Brand className="brand-link"><img  src={`${show ? Logo1:Logo}`} alt="Baba Beard" /></Navbar.Brand>
        </LinkContainer>
            
            
            
                
                    
        
                    
                    <LinkContainer to='/cart'>
                   
                    <Nav.Link><p className={`nav-font ${show && "nav-font-scroll"}`}><i className="fas fa-cart-arrow-down nav-icon"></i>Cart</p></Nav.Link>
                    </LinkContainer>
                    
                    

                    {userInfo ? (
                        <NavDropdown title={userInfo.name} id="username">
                            <LinkContainer to="/profile">
                                <NavDropdown.Item><p className={`nav-font ${show && "nav-font-scroll"}`}>Profile</p></NavDropdown.Item>
                               
                            </LinkContainer>
                            <NavDropdown.Item onClick={logoutHandler}><p>Logout</p></NavDropdown.Item>
                        </NavDropdown>
                    ) : <LinkContainer to='/login'>
                    <Nav.Link><p className={`nav-font ${show && "nav-font-scroll"}`}><i className="far fa-user nav-icon"></i>Sign in</p></Nav.Link>
                    </LinkContainer>}
                    {userInfo && userInfo.isAdmin && (
                        <NavDropdown title='Admin' id="username">
                        <LinkContainer to="/admin/userlist">
                            <NavDropdown.Item><p className={`nav-font ${show && "nav-font-scroll"}`}>Users</p></NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/admin/productlist">
                            <NavDropdown.Item><p className={`nav-font ${show && "nav-font-scroll"}`}>Products</p></NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/admin/orderlist">
                            <NavDropdown.Item><p className={`nav-font ${show && "nav-font-scroll"}`}>Orders</p></NavDropdown.Item>
                        </LinkContainer>
                       
                    </NavDropdown>
                    )}
                    
                    
                    </div> 
        </Container>
        
        </Navbar>
        <div className={`mob-nav ${show && "mob-nav-scroll"}`}>
            <div className="mob-nav-row">
                <div>
                <Dropdown >
  <Dropdown.Toggle className={`custom-dropdown ${show && "custom-dropdown-scroll"}`}>
    Menu
  </Dropdown.Toggle>

  <Dropdown.Menu className={`menu-items ${show && "menu-items-scroll"}`}>
  <Nav.Link><p className={`nav-font ${show && "nav-font-scroll"}`}>About us</p></Nav.Link>
                    <Nav.Link><p className={`nav-font ${show && "nav-font-scroll"}`}>Shop</p></Nav.Link>
                    <Nav.Link><p className={`nav-font ${show && "nav-font-scroll"}`}>Ingredients</p></Nav.Link>
                    <Nav.Link><p className={`nav-font ${show && "nav-font-scroll"}`}>Faqs</p></Nav.Link>
  </Dropdown.Menu>
</Dropdown>
               
                </div>
            <LinkContainer to="/">
        <Navbar.Brand className="brand-link"><img  src={`${show ? mobLogo1:mobLogo}`} alt="Baba Beard" /></Navbar.Brand>
        </LinkContainer>
        <LinkContainer to='/cart'>
                   
                   <Nav.Link><p className={`nav-font ${show && "nav-font-scroll"}`}><i className="fas fa-cart-arrow-down nav-icon"></i></p></Nav.Link>
                   </LinkContainer>
                   
                   

                   {userInfo ? (
                       <NavDropdown title={userInfo.name} id="username">
                           <LinkContainer to="/profile">
                               <NavDropdown.Item><p>Profile</p></NavDropdown.Item>
                              
                           </LinkContainer>
                           <NavDropdown.Item onClick={logoutHandler}><p>Logout</p></NavDropdown.Item>
                       </NavDropdown>
                   ) : <LinkContainer to='/login'>
                   <Nav.Link><p className={`nav-font ${show && "nav-font-scroll"}`}><i className="far fa-user nav-icon"></i></p></Nav.Link>
                   </LinkContainer>}
                   {userInfo && userInfo.isAdmin && (
                       <NavDropdown title='Admin' id="username">
                       <LinkContainer to="/admin/userlist">
                           <NavDropdown.Item><p className={`nav-font ${show && "nav-font-scroll"}`}>Users</p></NavDropdown.Item>
                       </LinkContainer>
                       <LinkContainer to="/admin/productlist">
                           <NavDropdown.Item><p className={`nav-font ${show && "nav-font-scroll"}`}>Products</p></NavDropdown.Item>
                       </LinkContainer>
                       <LinkContainer to="/admin/orderlist">
                           <NavDropdown.Item><p className={`nav-font ${show && "nav-font-scroll"}`}>Orders</p></NavDropdown.Item>
                       </LinkContainer>
                      
                   </NavDropdown>
                   )}
            </div>
        </div>
        </header>
        
    )
}

export default Header