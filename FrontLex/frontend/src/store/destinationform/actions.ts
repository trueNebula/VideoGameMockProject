import { SET_DESTINATION, CLEAR_DESTINATION } from "./types";
import { Destination } from "../../models/store";

export interface DestinationFormActions {
    type: string,
    payload: {
        data: Destination
    }
}
const setDestination = (data: Destination) : DestinationFormActions => {
    return {
        type: SET_DESTINATION,
        payload: {data}
    };
};

const clearDestination = (data: Destination) : DestinationFormActions => {
    return {
        type: CLEAR_DESTINATION,
        payload: {data}
    };
};

export {setDestination, clearDestination};