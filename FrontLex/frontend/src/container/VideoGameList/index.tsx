import {Table} from "react-bootstrap";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {FrontLexStore} from "../../models/store";
import VideoGameTableRow from "../../components/VideoGameTableRow";
import {Game} from "../../models/store";
import Grid from '@mui/material/Grid';
import {deleteGame} from "../../store/videogames/actions";
import {setGame} from "../../store/videogameform/actions";
import VideoGameCard from "../../components/VideoGameCard";
import {deleteWishlistGame} from "../../store/wishlist/actions";

const VideoGameList: React.FC = (): React.ReactElement => {
    const {
        videoGames: {games},
        gameState: {game},
        wishlistState: {wishlist}
    } = useSelector((state: FrontLexStore) => state);

    const dispatch = useDispatch();

    const handleDeleteGame = (id: number) => {
        console.log(id)
        dispatch(deleteGame(id));
        dispatch(deleteWishlistGame(id));
    }

    const handleOnClick = (game: Game) => {
        console.log(game.gameID)
        dispatch(setGame(game))
    }

    return (
        <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
            {games.map(({
                            platform,
                            gameID,
                            gameName,
                            sales,
                            releaseYear,
                            company,
                            rating,
                            imageLink,
                            description,
                            isWishlist
                        }, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                    <VideoGameCard key={index}
                                   platform={platform}
                                   gameName={gameName}
                                   sales={sales}
                                   gameID={gameID}
                                   releaseYear={releaseYear}
                                   company={company}
                                   rating={rating}
                                   handleOnClickCallback={({
                                                               gameID,
                                                               gameName,
                                                               sales,
                                                               releaseYear,
                                                               company,
                                                               rating,
                                                               platform,
                                                               description,
                                                               imageLink
                                                           }) => handleOnClick({
                                       gameID: gameID,
                                       gameName: gameName,
                                       sales,
                                       releaseYear,
                                       company,
                                       rating,
                                       platform,
                                       imageLink,
                                       description,
                                       isWishlist
                                   })}
                                   deleteGameCallback={(gameID) => handleDeleteGame(gameID)}
                                   imageLink={imageLink}
                                   description={description}
                                   isWishlist={isWishlist}
                    />
                </Grid>
            ))}
        </Grid>
    )
}

export default VideoGameList;