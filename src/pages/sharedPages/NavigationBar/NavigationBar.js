import './NavigationBar.css'
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { CustomLink } from './CustomLink';

import logo from './../../../resources/logo.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../Loading/Loading';
import { signOut } from 'firebase/auth';

const NavigationBar = () => {
    const location = useLocation();
    const { pathname } = location;

    const [user, loading, error] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        toast.success('Logged out successfully');
    };

    if (error) {
        toast.error(error.message);
    }

    if (loading) {
        return <Loading />
    }
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
                    <strong className='user-select-none fontLogo'>Doctor Asif</strong>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={CustomLink} to="/">Home</Nav.Link>
                        <Nav.Link as={CustomLink} to="/checkout">{pathname.includes('/checkout/') ? "Cancel Checkout" : "Checkout"}</Nav.Link>
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
                        <Nav.Link as={CustomLink} to="/about">About</Nav.Link>
                        {
                            user ? <Nav.Link style={{cursor: "pointer" }} onClick={logout}>Logout</Nav.Link> : <Nav.Link eventKey={2} as={CustomLink} to="/login">
                                Log in
                            </Nav.Link>
                        }

                    </Nav>
                    <ToastContainer />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;