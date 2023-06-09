import {CREATE_DESTINATION, DELETE_DESTINATION, UPDATE_DESTINATION} from "./types";
import {Destination, DestinationsState} from "../../models/store";
import {SET_DESTINATIONS} from "./types";
import destinations from "../../pages/Destinations";


const initialState = {
    destinations: [],
    num: 0
};

const destinationReducer = (state: DestinationsState = initialState, action: any): DestinationsState => {
        const {type, payload} = action;
        console.log("VIDEOGAMES", action)

        switch (type) {
            case SET_DESTINATIONS:
                console.log(state)
                return {
                    destinations: payload.data as Destination[],
                    num: state.destinations.length
                };
            case CREATE_DESTINATION:
                state.num += 1;
                action.payload.destinationID = Math.floor(Math.random() * 1000);

                return {
                    ...state,
                    destinations: [...state.destinations, action.payload],
                }
            case DELETE_DESTINATION:
                state.num -= 1;
                return {
                    ...state,
                    destinations: [...state.destinations.filter(destination => destination.destinationID !== action.payload)]
                };

            case UPDATE_DESTINATION:
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
                                    destination.startDate = action.payload.startDate
                                    destination.endDate = action.payload.endDate

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

export default destinationReducer;