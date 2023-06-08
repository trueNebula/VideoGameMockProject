import {CREATE_DESTINATION_PRIVATE, DELETE_DESTINATION_PRIVATE, UPDATE_DESTINATION_PRIVATE} from "./types";
import {Destination, PrivateDestinationsState} from "../../models/store";


const initialState = {
    privateDestinations: [],
    num: 0
};

const privateDestinationReducer = (state: PrivateDestinationsState = initialState, action: any): PrivateDestinationsState => {
        const {type, payload} = action;
        console.log("PRIVATE", action) //debug

        switch (type) {
            case CREATE_DESTINATION_PRIVATE:
                action.payload.destinationID = Math.floor(Math.random() * 1000);

                state.num += 1;
                return {
                    ...state,
                    privateDestinations: [...state.privateDestinations, action.payload],
                }
            case DELETE_DESTINATION_PRIVATE:
                state.num -= 1;
                return {
                    ...state,
                    privateDestinations: [...state.privateDestinations.filter(destination => destination.destinationID !== action.payload)]
                };

            case UPDATE_DESTINATION_PRIVATE:
                return {
                    ...state,
                    privateDestinations: [
                        ...state.privateDestinations.map(destination => {
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