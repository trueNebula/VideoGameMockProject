import {CREATE_DESTINATION_PRIVATE, DELETE_DESTINATION_PRIVATE, UPDATE_DESTINATION_PRIVATE} from "./types";
import {Destination, DestinationsState} from "../../models/store";


const initialState = {
    destinations: [],
    num: 0
};

const privateDestinationReducer = (state: DestinationsState = initialState, action: any): DestinationsState => {
        const {type, payload} = action;
        console.log("PRIVATE", action) //debug

        switch (type) {
            case CREATE_DESTINATION_PRIVATE:
                state.num += 1;
                return {
                    ...state,
                    destinations: [...state.destinations, action.payload],
                }
            case DELETE_DESTINATION_PRIVATE:
                state.num -= 1;
                return {
                    ...state,
                    destinations: [...state.destinations.filter(destination => destination.destinationID !== action.payload)]
                };

            case UPDATE_DESTINATION_PRIVATE:
                return {
                    ...state,
                    destinations: [
                        ...state.destinations.map(destination => {
                                if (destination.destinationID === action.payload.destinationID) {
                                    destination.destinationName = action.payload.destinationName;
                                    destination.geolocation = action.payload.geolocation
                                    destination.imageLink = action.payload.imageLink
                                    destination.description = action.payload.description
                                    destination.isWishlist = action.payload.isWishlist

                                }
                                return destination;
                            }
                        )]
                };

            default:
                return state;
        }
    }
;

export default privateDestinationReducer;