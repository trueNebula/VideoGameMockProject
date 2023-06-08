import React from 'react';
import Container from '@mui/material/Container';
import { AppBar, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { UserLogin } from "../../models/destination";
import { AccountCircle } from "@mui/icons-material";
import Grid from "@mui/material/Grid";

const CustomNavbar: React.FC<UserLogin> = ({username, permissions} : UserLogin) : React.ReactElement => {
    return (
        <AppBar position={"static"} style={{ background: '#2E3B55', paddingBottom: 10, paddingTop:10 }}>
            <Toolbar>
                <Container >

                    <Grid container justifyContent={"space-between"} alignItems={"center"}>

                        <Grid container justifyContent={"space-between"} flexDirection={"column"} xs={5}>
                            <>
                                <Typography
                                    variant="h6"
                                    noWrap
                                    component="a"
                                    href="/"
                                    sx={{
                                        mr: 2,
                                        display: {xs: 'none', md: 'flex'},
                                        fontWeight: 700,
                                        letterSpacing: '.1rem',
                                        color: 'white',
                                        textDecoration: 'none',
                                    }}>
                                    VACATION DESTINATION LIST
                                </Typography>
                            </>
                            <Grid>
                                <NavLink  style={({ isActive }) => {
                                    return {
                                        margin: "7px",
                                        textDecoration: "none",
                                        color: isActive ? "lightcoral" : "white",
                                    };
                                }} to="/">Vacation Destinations</NavLink>

                                {permissions !== "admin" &&
                                <NavLink style={({ isActive }) => {
                                    return {
                                        margin: "7px",
                                        textDecoration: "none",
                                        color: isActive ? "lightcoral" : "white",
                                    };
                                }} to="/wishlist">Wishlist</NavLink>}
                                {permissions !== "admin" &&
                                    <NavLink style={({ isActive }) => {
                                        return {
                                            margin: "7px",
                                            textDecoration: "none",
                                            color: isActive ? "lightcoral" : "white",
                                        };
                                    }} to="/private">Private List</NavLink>}
                            </Grid>
                        </Grid>

                        <Grid container justifyContent={"space-between"} xs={1.8}>
                            <AccountCircle/>
                            Logged in as: {username}
                        </Grid>

                    </Grid>

                </Container>
            </Toolbar>
        </AppBar>
    );
}

export default CustomNavbar;
