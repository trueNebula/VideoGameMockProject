import React from 'react';
import Container from '@mui/material/Container';
import {AppBar} from "@mui/material";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom";

const CustomNavbar: React.FC = (): React.ReactElement => {
    return (

        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">VIDEO GAMES LIST</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink  style={({ isActive, isPending }) => {
                            return {
                                margin: "7px",
                                fontWeight: isActive ? "bold" : "",
                                textDecoration: isActive ? "" : "none",
                                color: isActive ? "lightcoral" : "white",
                            };
                        }} to="/">Video Games</NavLink>
                        <NavLink style={({ isActive, isPending }) => {
                            return {
                                margin: "7px",
                                fontWeight: isActive ? "bold" : "",
                                textDecoration: isActive ? "" : "none",
                                color: isActive ? "lightcoral" : "white",
                            };
                        }} to="/wishlist">Wishlist</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default CustomNavbar;
