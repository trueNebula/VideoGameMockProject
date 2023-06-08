import {ADD_DESTINATION_WISHLIST, UPDATE_DESTINATION_WISHLIST, DELETE_DESTINATION_WISHLIST} from "./types";
import {Destination, DestinationsState, WishListState} from "../../models/store";


const initialState = {
    wishlist: [],
    num: 0
};

const wishlistReducer = (state: WishListState = initialState, action: any): WishListState => {
        const {type, payload} = action;
        console.log("WISHLIST", action)

        switch (type) {
            case ADD_DESTINATION_WISHLIST:
                state.num += 1;
                return {
                    ...state,
                    wishlist: [...state.wishlist, action.payload],
                }
            case DELETE_DESTINATION_WISHLIST:
                state.num -= 1;
                return {
                    ...state,
                    wishlist: [...state.wishlist.filter(destination => destination.destinationID !== action.payload)]
                };

            case UPDATE_DESTINATION_WISHLIST:
                return {
                    ...state,
                    wishlist: [
                        ...state.wishlist.map(destination => {
                                if (destination.destinationID === action.payload.destinationID) {
                                    destination.destinationName = action.payload.destinationName;
                                    destination.geolocation = action.payload.geolocation
                                    destination.imageLink = action.payload.imageLink
                                    destination.description = action.payload.description
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

export default wishlistReducer;