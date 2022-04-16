import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CustomLink } from './CustomLink';

import logo from './../../../resources/logo.png'

const NavigationBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img
                        alt="Doctor Asif"
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top rounded-circle me-2"
                    />{' '}
                    Doctor Asif
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={CustomLink} to="/">Home</Nav.Link>
                        <Nav.Link as={CustomLink} to="/checkout">Checkout</Nav.Link>
                        <NavDropdown title="Services" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={CustomLink} to="/services/psychiatrist">Personal Psychiatrist</NavDropdown.Item>
                            <NavDropdown.Item as={CustomLink} to="/services/familydoctor">Family Doctor</NavDropdown.Item>
                            <NavDropdown.Item as={CustomLink} to="/services/chamber">Chamber</NavDropdown.Item>
                            <NavDropdown.Item as={CustomLink} to="/services/dietcouch">Diet Couch</NavDropdown.Item>
                            <NavDropdown.Item as={CustomLink} to="/services/fitnesscouch">Fitness Couch</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={CustomLink} to="/services/youtube">Youtube Health Guidlines</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link as={CustomLink} to="/blogs">Blogs</Nav.Link>
                        <Nav.Link eventKey={2} as={CustomLink} to="/login">
                            Log in
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;