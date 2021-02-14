import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {logout} from '../actions/userAction'

const Header = () => {

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        
        <header>
        
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
        <LinkContainer to="/">
        <Navbar.Brand >Sahr-e-Zayt</Navbar.Brand>
        </LinkContainer>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <LinkContainer to='/cart'>
                    <Nav.Link><i className="fas fa-cart-arrow-down"></i>Cart</Nav.Link>
                    </LinkContainer>
                    {userInfo ? (
                        <NavDropdown title={userInfo.name} id="username">
                            <LinkContainer to="/profile">
                                <NavDropdown.Item>Profile</NavDropdown.Item>
                               
                            </LinkContainer>
                            <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    ) : <LinkContainer to='/login'>
                    <Nav.Link><i className="far fa-user"></i>Sign in</Nav.Link>
                    </LinkContainer>}
                    
                 </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        
        </header>
        
    )
}

export default Header
