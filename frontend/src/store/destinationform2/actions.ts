import {CLEAR_DESTINATION_PRIVATE, SET_DESTINATION_PRIVATE} from "./types";
import { Destination } from "../../models/store";

export interface DestinationFormActions {
    type: string,
    payload: {
        data: Destination
    }
}
const setDestinationPrivate = (data: Destination) : DestinationFormActions => {
    return {
        type: SET_DESTINATION_PRIVATE,
        payload: {data}
    };
};

const clearDestinationPrivate = (data: Destination) : DestinationFormActions => {
    return {
        type: CLEAR_DESTINATION_PRIVATE,
        payload: {data}
    };
};

export {setDestinationPrivate, clearDestinationPrivate};