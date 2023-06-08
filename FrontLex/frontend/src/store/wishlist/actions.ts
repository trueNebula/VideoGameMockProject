import { ADD_DESTINATION_WISHLIST, UPDATE_DESTINATION_WISHLIST, DELETE_DESTINATION_WISHLIST } from "./types";
import { Destination } from "../../models/store";

const addWishlistDestination = (data: Destination) => {
    return {
        type: ADD_DESTINATION_WISHLIST,
        payload: data
    };
};

const deleteWishlistDestination = (data: number|null) => {
    return {
        type: DELETE_DESTINATION_WISHLIST,
        payload: data
    };
};

const updateWishlistDestination = (data: Destination) => {
    return {
        type: UPDATE_DESTINATION_WISHLIST,
        payload: data

    };
};


export {addWishlistDestination, deleteWishlistDestination, updateWishlistDestination};