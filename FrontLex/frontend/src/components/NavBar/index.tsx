import React from 'react';
import Container from '@mui/material/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";

const CustomNavbar: React.FC = (): React.ReactElement => {
    return (

        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">VIDEO GAMES LIST</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link style={{margin: 7}} to="/">Video Games</Link>
                        <Link style={{margin: 7}} to="/wishlist">Wishlist</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default CustomNavbar;
