import React, {useEffect, useRef, useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { FrontLexStore, Destination } from "../../models/store";
import { getDestinations } from "../../store/destinations/operations";
import Destinations from "../../pages/Destinations";
import { createDestination, updateDestination } from "../../store/destinations/actions";
import DestinationForm from "../../components/DestinationForm";
import {updateWishlistDestination} from "../../store/wishlist/actions";
import {UserLogin} from "../../models/destination";

const DestinationFormContainer: React.FC<UserLogin> = (permissions : UserLogin): React.ReactElement => {
    const dispatch = useDispatch();
    const {
        destinationState: {destination},
        destinations: {destinations},
        wishlistState: {wishlist}
    } = useSelector((state: FrontLexStore) => state);

    const handleUpdate = (g: Destination) => {
        if (g.isWishlist) {
            dispatch(updateDestination(g))
            dispatch(updateWishlistDestination(g))
        } else dispatch(updateDestination(g))
    }

    const handleCreate = (g: Destination) => {
        dispatch(createDestination(g))
    }

    return (
        <DestinationForm
            destinationID={destination.destinationID}
            destinationName={destination.destinationName}
            geolocation={destination.geolocation}
            imageLink={destination.imageLink}
            description={destination.description}
            isWishlist={destination.isWishlist}
            createCallback={(destination) => {
                handleCreate(destination)
            }}
            updateCallback={(destination) => {
                handleUpdate(destination)
            }}
        />
    )
}

export default DestinationFormContainer;
