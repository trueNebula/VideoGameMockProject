import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {FrontLexStore} from "../../models/store";
import {Destination} from "../../models/store";
import Grid from '@mui/material/Grid';
import {deleteDestination, updateDestination} from "../../store/destinations/actions";
import {setDestination} from "../../store/destinationform/actions";
import DestinationCard from "../../components/DestinationCard";
import {addWishlistDestination, deleteWishlistDestination} from "../../store/wishlist/actions";
import {getDestinations} from "../../store/destinations/operations";
import {UserLogin} from "../../models/destination";
import {deleteDestinationPrivate, updateDestinationPrivate} from "../../store/privatelist/actions";

const DestinationList: React.FC<UserLogin> = ({permissions}: UserLogin): React.ReactElement => {
    const {
        destinations: {destinations},
        destinationState: {destination},
        wishlistState: {wishlist},
        privateDestinations: {privateDestinations}
    } = useSelector((state: FrontLexStore) => state);

    const dispatch = useDispatch();
// neortodox tot ce e in acest file
    useEffect(() => {
        if (destinations.length === 0)
            // @ts-ignore
            dispatch(getDestinations())
    }, [])

    const handleDeleteDestination = (id: number) => {
        dispatch(deleteDestination(id));
        dispatch(deleteWishlistDestination(id));
    }

    const handleWishlistUpdate = (g: Destination) => {
        dispatch(updateDestination(g))
        g.isWishlist ? dispatch(addWishlistDestination(g)) : dispatch(deleteWishlistDestination(g.destinationID))
    }


    const handleOnClick = (g: Destination) => {
        console.log(g.destinationID)
        dispatch(setDestination(g))
    }


    return (
        <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
            {destinations.map(({
                                   geolocation,
                                   destinationID,
                                   destinationName,
                                   imageLink,
                                   description,
                                   isWishlist
                               }, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                    <DestinationCard key={index}
                                     permissions={permissions}
                                     geolocation={geolocation}
                                     destinationName={destinationName}
                                     destinationID={destinationID}
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
                                         isWishlist
                                     })}
                                     deleteDestinationCallback={(destinationID: number) => handleDeleteDestination(destinationID)}
                                     wishlistCallback={({
                                                            destinationID,
                                                            destinationName,
                                                            geolocation,
                                                            description,
                                                            imageLink, isWishlist
                                                        }) => handleWishlistUpdate({
                                         destinationID,
                                         destinationName,
                                         geolocation,
                                         description,
                                         imageLink, isWishlist
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

export default DestinationList;