import {CLEAR_DESTINATION_PRIVATE, SET_DESTINATION_PRIVATE} from "./types";
import {Destination, DestinationsState, DestinationState, DestinationStatePrivate} from "../../models/store";


const initialState = {
    destination2: {
        destinationID: null,
        destinationName: "",
        geolocation: "",
        description:"",
        imageLink:"",
        startDate:"",
        endDate:""
    } as Destination
};

const destinationFormReducerPrivate = (state: DestinationStatePrivate = initialState, action: any): DestinationStatePrivate => {
        const {type, payload} = action;
        switch (type) {
            case SET_DESTINATION_PRIVATE:
                console.log(action)
                return {
                    destination2: {...payload.data}
                };
            case CLEAR_DESTINATION_PRIVATE:
                console.log(action)
                return {
                    destination2: {...initialState.destination2}
                };
            default:
                return state;
        }
    }
;

export default destinationFormReducerPrivate;