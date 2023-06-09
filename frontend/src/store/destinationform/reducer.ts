import {CLEAR_DESTINATION, SET_DESTINATION} from "./types";
import {Destination, DestinationsState, DestinationState} from "../../models/store";


const initialState = {
    destination: {
        destinationID: null,
        destinationName: "",
        geolocation: "",
        description:"",
        imageLink:"",
        startDate:"",
        endDate:""
    } as Destination
};

const destinationFormReducer = (state: DestinationState = initialState, action: any): DestinationState => {
        const {type, payload} = action;
        switch (type) {
            case SET_DESTINATION:
                console.log(action)
                return {
                    destination: {...payload.data}
                };
            case CLEAR_DESTINATION:
                console.log(action)
                return {
                    destination: {...initialState.destination}
                };
            default:
                return state;
        }
    }
;

export default destinationFormReducer;