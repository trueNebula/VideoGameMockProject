import React, {useEffect, useRef, useState} from 'react';
import CustomNavbar from "../components/NavBar";
import Container from '@mui/material/Container';
import {Button, Col, Form, Row, Table} from 'react-bootstrap';
import {useSelector, useDispatch} from "react-redux";
import {FrontLexStore} from "../models/store";
import {getGames} from "../store/videogames/operations";
import {createGame} from "../store/videogames/actions";
import VideoGameList from "../container/VideoGameList";
import VideoGameForm from "../components/VideoGameForm";
import VideoGameFormContainer from "../container/VideoGameFormContainer";
import WishlistContainer from "../container/WishlistContainer";


const Wishlist = () => {

    return (
        <>
            <CustomNavbar />
            <Container className="pt-5">
                <WishlistContainer />
            </Container>

        </>
    );
}

export default Wishlist;

