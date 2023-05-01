import React, {useEffect, useRef, useState} from 'react';
import CustomNavbar from "../components/NavBar";
import Container from 'react-bootstrap/Container';
import {Button, Col, Form, Row, Table} from 'react-bootstrap';
import {useSelector, useDispatch} from "react-redux";
import {FrontLexStore} from "../models/store";
import {getGames} from "../store/videogames/operations";
import {createGame} from "../store/videogames/actions";
import VideoGameList from "../container/VideoGameList";
import VideoGameForm from "../components/VideoGameForm";
import VideoGameFormContainer from "../container/VideoGameFormContainer";


const Games = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        // @ts-ignore
        dispatch(getGames())
    }, [])


    return (
        <>
            <CustomNavbar/>
            <Container className="pt-5">
                <h4 className='my-3'>Current selection: </h4>
                <VideoGameFormContainer/>
                <VideoGameList/>
            </Container>

        </>
    );
}

export default Games;

