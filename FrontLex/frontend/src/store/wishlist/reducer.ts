import {DELETE_GAME, ADD_GAME, UPDATE_GAME} from "./types";
import {Game, VideoGamesState, WishListState} from "../../models/store";


const initialState = {
    wishlist: [],
    num: 0
};

const wishlistReducer = (state: WishListState = initialState, action: any): WishListState => {
        const {type, payload} = action;
        switch (type) {
            case ADD_GAME:
                state.num += 1;
                return {
                    ...state,
                    wishlist: [...state.wishlist, action.payload],
                }
            case DELETE_GAME:
                state.num -= 1;
                return {
                    ...state,
                    wishlist: [...state.wishlist.filter(game => game.gameID !== action.payload)]
                };

            case UPDATE_GAME:
                return {
                    ...state,
                    wishlist: [
                        ...state.wishlist.map(game => {
                                if (game.gameID === action.payload.gameID) {
                                    game.gameName = action.payload.gameName;
                                    game.rating = action.payload.rating
                                    game.company = action.payload.company
                                    game.sales = action.payload.sales
                                    game.releaseYear = action.payload.releaseYear
                                    game.platform = action.payload.platform
                                    game.imageLink = action.payload.imageLink
                                    game.description = action.payload.description
                                }
                                return game;
                            }
                        )]
                };

            default:
                return state;
        }
    }
;

export default wishlistReducer;