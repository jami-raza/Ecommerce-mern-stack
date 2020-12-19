import React from 'react'
import {Container, Navbar, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
const Header = () => {
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
                    <Nav.Link><i class="fas fa-cart-arrow-down"></i>Cart</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/login'>
                    <Nav.Link><i className="far fa-user"></i>Sign in</Nav.Link>
                    </LinkContainer>
                 </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        
        </header>
        
    )
}

export default Header
