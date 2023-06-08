import {CREATE_DESTINATION_PRIVATE, DELETE_DESTINATION_PRIVATE, UPDATE_DESTINATION_PRIVATE} from "./types";
import { Destination } from "../../models/store";


const createDestinationPrivate = (data: Destination) => {
    return {
        type: CREATE_DESTINATION_PRIVATE,
        payload: data
    };
};

const deleteDestinationPrivate = (data: number) => {
    return {
        type: DELETE_DESTINATION_PRIVATE,
        payload: data

    };
};

const updateDestinationPrivate = (data: Destination) => {
    return {
        type: UPDATE_DESTINATION_PRIVATE,
        payload: data
    };
};


export {createDestinationPrivate, deleteDestinationPrivate, updateDestinationPrivate};