import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {FrontLexStore, Destination} from "../../models/store";
import Grid from '@mui/material/Grid';
import DestinationCard from "../../components/DestinationCard";
import {UserLogin} from "../../models/destination";
import {addWishlistDestination, updateWishlistDestination, deleteWishlistDestination} from "../../store/wishlist/actions";
import {deleteDestinationPrivate, updateDestinationPrivate} from "../../store/privatelist/actions";
import {updateDestination} from "../../store/destinations/actions";
import {setDestination} from "../../store/destinationform/actions";
import {setDestinationPrivate} from "../../store/destinationform2/actions";

const PrivateContainer: React.FC<UserLogin> = ({permissions}: UserLogin): React.ReactElement => {
    const {
        destinations: {destinations},
        destinationState: {destination},
        wishlistState: {wishlist},
        privateDestinations: {privateDestinations}
    } = useSelector((state: FrontLexStore) => state);

    const dispatch = useDispatch();

    const handleUpdate = (g: Destination) => {
        console.log("change in private")
        console.log(g)

        if (g.isWishlist) {
            dispatch(updateDestinationPrivate(g));
            dispatch(updateDestination(g))
            dispatch(updateWishlistDestination(g))
        } else if (permissions === "user") {
            dispatch(updateDestinationPrivate(g));
        } else dispatch(updateDestination(g))
    }

    const handleOnClick = (g: Destination) => {
        console.log(g.destinationID)
        dispatch(setDestinationPrivate(g))
    }

    const handleDeleteDestination = (id: number) => {
        console.log("hi?")
        if (permissions === "user") {
            dispatch(deleteDestinationPrivate(id));
            dispatch(deleteWishlistDestination(id));
        }
    }

    const handleWishlistUpdate = (g: Destination) => {
        dispatch(updateDestinationPrivate(g))
        g.isWishlist ? dispatch(addWishlistDestination(g)) : dispatch(deleteWishlistDestination(g.destinationID))

    }

    return (
        <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
            {privateDestinations.map(({
                               destinationID,
                               destinationName,
                               geolocation,
                               imageLink,
                               description,
                               isWishlist,
                               startDate,
                               endDate
                           }, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                    <DestinationCard key={index}
                                     permissions={permissions}
                                     destinationName={destinationName}
                                     destinationID={destinationID}
                                     geolocation={geolocation}
                                     startDate={startDate}
                                     endDate={endDate}
                                     onClickCallback={({
                                                           destinationID,
                                                           destinationName,
                                                           geolocation,
                                                           description,
                                                           imageLink,
                                                           isWishlist
                                                       }) => handleOnClick({
                                         destinationID: destinationID,
                                         destinationName: destinationName,
                                         geolocation,
                                         imageLink,
                                         description,
                                         isWishlist,
                                         startDate,
                                         endDate
                                     })}
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
                                                        }) => handleWishlistUpdate({
                                         destinationID,
                                         destinationName,
                                         geolocation,
                                         imageLink,
                                         description,
                                         isWishlist,
                                         startDate,
                                         endDate
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

export default PrivateContainer;