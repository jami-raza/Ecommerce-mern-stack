import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Container, Navbar, Nav, NavDropdown,Row} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {logout} from '../actions/userAction'
import Logo from '../Content/images/Nav_Bar_Logo.png'
import mobLogo from '../Content/images/Nav_Bar_Logo.png'
import '../Style/Header.css'
const Header = () => {

    



    const dispatch = useDispatch()
    const [show,setShow] = useState(false)
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = () => {
        dispatch(logout())
    }
    const handleChange = () => {
        console.log("clicked")
        setShow(true)
        
        
    }
    return (
        
        <header >
        
        <Navbar variant="dark" className="top-navbar">
        <Container fluid>
            <div className="header-row">
        <Nav.Link><p className="nav-font">About us</p></Nav.Link>
                    <Nav.Link><p className="nav-font">Shop</p></Nav.Link>
                    <Nav.Link><p className="nav-font">Ingredients</p></Nav.Link>
                    <Nav.Link><p className="nav-font">Faqs</p></Nav.Link>
        <LinkContainer to="/">
        <Navbar.Brand className="brand-link"><img  src={Logo} alt="Baba Beard" /></Navbar.Brand>
        </LinkContainer>
            
            
            
                
                    
                
                    
                    <LinkContainer to='/cart'>
                   
                    <Nav.Link><p className="nav-font"><i className="fas fa-cart-arrow-down nav-icon"></i>Cart</p></Nav.Link>
                    </LinkContainer>
                    
                    

                    {userInfo ? (
                        <NavDropdown title={userInfo.name} id="username">
                            <LinkContainer to="/profile">
                                <NavDropdown.Item><p>Profile</p></NavDropdown.Item>
                               
                            </LinkContainer>
                            <NavDropdown.Item onClick={logoutHandler}><p>Logout</p></NavDropdown.Item>
                        </NavDropdown>
                    ) : <LinkContainer to='/login'>
                    <Nav.Link><p className="nav-font"><i className="far fa-user nav-icon"></i>Sign in</p></Nav.Link>
                    </LinkContainer>}
                    {userInfo && userInfo.isAdmin && (
                        <NavDropdown title='Admin' id="username">
                        <LinkContainer to="/admin/userlist">
                            <NavDropdown.Item><p>Users</p></NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/admin/productlist">
                            <NavDropdown.Item><p>Products</p></NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/admin/orderlist">
                            <NavDropdown.Item><p>Orders</p></NavDropdown.Item>
                        </LinkContainer>
                       
                    </NavDropdown>
                    )}
                    
                    
                    </div> 
        </Container>
        
        </Navbar>
        <div className="mob-nav">
            <div className="mob-nav-row">
                <div>
                <button onClick={handleChange}><i className="fas fa-bars"></i> Menu</button>
                <div className={` ${show ? "main-mobnav":"menu-items"}`}>
                    <Nav.Link><p className="nav-font">About us</p></Nav.Link>
                    <Nav.Link><p className="nav-font">Shop</p></Nav.Link>
                    <Nav.Link><p className="nav-font">Ingredients</p></Nav.Link>
                    <Nav.Link><p className="nav-font">Faqs</p></Nav.Link>
                </div>
                </div>
            <LinkContainer to="/">
        <Navbar.Brand className="brand-link"><img  src={mobLogo} alt="Baba Beard" /></Navbar.Brand>
        </LinkContainer>
            </div>
        </div>
        </header>
        
    )
}

export default Header
