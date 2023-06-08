import React, {useEffect, useRef, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {FrontLexStore, Destination} from "../../models/store";
import {getDestinations} from "../../store/destinations/operations";
import Destinations from "../../pages/Destinations";
import {createDestination, updateDestination} from "../../store/destinations/actions";
import DestinationForm from "../../components/DestinationForm";
import {updateWishlistDestination} from "../../store/wishlist/actions";
import {UserLogin} from "../../models/destination";
import {createDestinationPrivate, updateDestinationPrivate} from "../../store/privatelist/actions";

const DestinationFormContainer: React.FC<UserLogin> = ({permissions}: UserLogin): React.ReactElement => {
    const dispatch = useDispatch();
    const {
        destinationState: {destination},
        destinations: {destinations},
        wishlistState: {wishlist},
        privateDestinations: {privateDestinations}
    } = useSelector((state: FrontLexStore) => state);

    const handleUpdate = (g: Destination) => {
        if (g.isWishlist) {
            dispatch(updateDestinationPrivate(g));
            dispatch(updateDestination(g))
            dispatch(updateWishlistDestination(g))
        } else if (permissions === "user") {
            dispatch(updateDestinationPrivate(g));
        } else dispatch(updateDestination(g))
    }

    const handleCreate = (g: Destination) => {
        console.log(permissions)
        if(permissions === "user") {
            console.log("AAAA")
            dispatch(createDestinationPrivate(g))
        }
        else {
            dispatch(createDestination(g))
        }
    }

    return (
        //TODO: RANDARE CONDITIONALA BAZATA PE STORE
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
