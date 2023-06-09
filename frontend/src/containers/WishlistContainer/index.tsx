import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {FrontLexStore, Destination} from "../../models/store";
import Grid from '@mui/material/Grid';
import DestinationCard from "../../components/DestinationCard";
import {
    addWishlistDestination,
    deleteWishlistDestination,
    updateWishlistDestination
} from "../../store/wishlist/actions";
import {updateDestination} from "../../store/destinations/actions";
import {UserLogin} from "../../models/destination";
import {updateDestinationPrivate} from "../../store/privatelist/actions";

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

    const handleUpdate = (g: Destination) => {
        console.log("change in wishlist")
        if (g.isWishlist) {
            dispatch(updateDestinationPrivate(g));
            dispatch(updateDestination(g))
            dispatch(updateWishlistDestination(g))
        } else if (permissions === "user") {
            dispatch(updateDestinationPrivate(g));
        } else dispatch(updateDestination(g))
    }

    const handleWishlist = (g: Destination) => {
        if (g.isWishlist)
            dispatch(addWishlistDestination(g));
        else {
            dispatch(deleteWishlistDestination(g.destinationID));
            if (permissions === "user") {
                dispatch(updateDestinationPrivate(g));
            } else
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
                               isWishlist,
                               startDate, endDate
                           }, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                    <DestinationCard key={index}
                                     permissions={permissions}
                                     destinationName={destinationName}
                                     destinationID={destinationID}
                                     geolocation={geolocation}
                                     startDate={startDate}
                                     endDate={endDate}
                                     onClickCallback={() => null}
                                     deleteDestinationCallback={(gameID) => handleDeleteDestination(gameID)}
                                     updateCallback={(destination) => {
                                         handleUpdate(destination)
                                     }}
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
                                         isWishlist,
                                         startDate, endDate
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