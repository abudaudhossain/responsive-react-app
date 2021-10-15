import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Awesome Car Mecanic</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="me-auto">
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#experts">Experts</Nav.Link>
                        </Nav>
                        {
                            user.displayName ?
                                <>
                                    <Nav>
                                        <Nav.Link onClick={logOut} >LogOut</Nav.Link>
                                    </Nav>
                                    <Navbar.Text>
                                        Signed in as: <Link to="/login">{user?.displayName}</Link>
                                    </Navbar.Text>
                                </>

                                :
                                <Nav>
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                </Nav>
                        }



                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    );
};

export default Header;