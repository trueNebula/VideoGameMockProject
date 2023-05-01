import React, {useEffect, useRef, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {FrontLexStore} from "../../models/store";
import {getGames} from "../../store/videogames/operations";
import Games from "../../pages/Games";
import {Button, Col, Form, Row, Table} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {createGame} from "../../store/videogames/actions";
import VideoGameForm from "../../components/VideoGameForm";

const VideoGameFormContainer: React.FC = (): React.ReactElement => {
    const dispatch = useDispatch();
    const {gameState: {game}} = useSelector((state: FrontLexStore) => state);


    return (
        <VideoGameForm
            id={game.id}
            platform={game.platform}
            name={game.name}
            sales={game.sales}
            releaseYear={game.releaseYear}
            company={game.company}
            rating={game.rating}
        />
    )
}

export default VideoGameFormContainer;
