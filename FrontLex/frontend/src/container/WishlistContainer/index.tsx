import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {FrontLexStore} from "../../models/store";
import Grid from '@mui/material/Grid';
import VideoGameCard from "../../components/VideoGameCard";
import {deleteWishlistGame} from "../../store/wishlist/actions";

const WishlistContainer: React.FC = (): React.ReactElement => {
    const {
        videoGames: {games},
        gameState: {game},
        wishlistState: {wishlist}
    } = useSelector((state: FrontLexStore) => state);

    const dispatch = useDispatch();

    const handleDeleteGame = (id: number) => {
        console.log(id)
        dispatch(deleteWishlistGame(id));
    }


    return (
        <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
            {wishlist.map(({
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
                                   handleOnClickCallback={() => null}
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

export default WishlistContainer;