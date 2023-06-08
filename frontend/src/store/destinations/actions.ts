import { CREATE_DESTINATION, UPDATE_DESTINATION, DELETE_DESTINATION, SET_DESTINATIONS } from "./types";
import { Destination } from "../../models/store";

export interface SetDestinationsActions {
    type: string,
    payload: {
        data: Destination[]
    }
}
const setDestinations = (data: Destination[]) : SetDestinationsActions => {
    return {
        type: SET_DESTINATIONS,
        payload: {data}
    };
};
const createDestination = (data: Destination) => {
    return {
        type: CREATE_DESTINATION,
        payload: data
    };
};

const deleteDestination = (data: number) => {
    return {
        type: DELETE_DESTINATION,
        payload: data

    };
};

const updateDestination = (data: Destination) => {
    return {
        type: UPDATE_DESTINATION,
        payload: data
    };
};


export {createDestination, deleteDestination, updateDestination, setDestinations};