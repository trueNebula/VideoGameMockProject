import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FrontLexStore, Destination } from "../../models/store";
import Grid from '@mui/material/Grid';
import DestinationCard from "../../components/DestinationCard";
import { addWishlistDestination, deleteWishlistDestination } from "../../store/wishlist/actions";
import { updateDestination } from "../../store/destinations/actions";
import {UserLogin} from "../../models/destination";

const WishlistContainer: React.FC<UserLogin> = ({permissions}: UserLogin): React.ReactElement => {
    const {
        destinations: {destinations},
        destinationState: {destination},
        wishlistState: {wishlist}
    } = useSelector((state: FrontLexStore) => state);

    const dispatch = useDispatch();

    const handleDeleteDestination = (id: number) => {
        alert("Cannot delete game in wishlist menu!")
    }

    const handleWishlist = (g: Destination) => {
        if(g.isWishlist)
            dispatch(addWishlistDestination(g));
        else{
            dispatch(deleteWishlistDestination(g.destinationID));
            dispatch(updateDestination(g))
        }
    }

    return (
        <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
            {wishlist.map(({
                               destinationID,
                               destinationName,
                               geolocation,
                               imageLink,
                               description,
                               isWishlist
                           }, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                    <DestinationCard key={index}
                                   permissions={permissions}
                                   destinationName={destinationName}
                                   destinationID={destinationID}
                                   geolocation={geolocation}
                                   onClickCallback={() => null}
                                   deleteDestinationCallback={(gameID) => handleDeleteDestination(gameID)}
                                   wishlistCallback={({
                                                          destinationID,
                                                          destinationName,
                                                          geolocation,
                                                          imageLink,
                                                          description,
                                                          isWishlist
                                                      }) => handleWishlist({
                                       destinationID,
                                       destinationName,
                                       geolocation,
                                       imageLink,
                                       description,
                                       isWishlist
                                   })}
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