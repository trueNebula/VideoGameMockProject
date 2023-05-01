import {Table} from "react-bootstrap";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {FrontLexStore} from "../../models/store";
import VideoGameTableRow from "../../components/VideoGameTableRow";
import {Game} from "../../models/store";
import {deleteGame} from "../../store/videogames/actions";
import {setGame} from "../../store/videogameform/actions";

const VideoGameList: React.FC = (): React.ReactElement => {
    const {
        videoGames: {games},
        gameState: {game}
    } = useSelector((state: FrontLexStore) => state);

    const dispatch = useDispatch();

    const handleDeleteGame = (id: number) => {
        console.log(id)
        dispatch(deleteGame(id));
    }

    const handleOnClick = (game: Game) => {
        console.log(game.id)
        dispatch(setGame(game))
    }

    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Name</th>
                <th>Release Year</th>
                <th>Company</th>
                <th>Rating</th>
                <th>Sales</th>
                <th>Platform</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {games.map(({platform, id, name, sales, releaseYear, company, rating}, index) => (
                <VideoGameTableRow key={index}
                                   platform={platform}
                                   name={name}
                                   sales={sales}
                                   id={id}
                                   releaseYear={releaseYear}
                                   company={company}
                                   rating={rating}
                                   handleOnClickCallback={({
                                                               id,
                                                               name,
                                                               sales,
                                                               releaseYear,
                                                               company,
                                                               rating,
                                                               platform
                                                           }) => handleOnClick({
                                       id,
                                       name,
                                       sales,
                                       releaseYear,
                                       company,
                                       rating,
                                       platform
                                   })}
                                   deleteGameCallback={(id) => handleDeleteGame(id)}

                />))}
            </tbody>
        </Table>
    )
}

export default VideoGameList;