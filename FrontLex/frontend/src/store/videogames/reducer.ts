import {CREATE_GAME, DELETE_GAME, UPDATE_GAME} from "./types";
import {Game, VideoGamesState} from "../../models/store";
import {SET_GAMES} from "./types";


const initialState = {
    games: [],
    num: 0
};

const gameReducer = (state: VideoGamesState = initialState, action: any): VideoGamesState => {
        const {type, payload} = action;
        switch (type) {
            case SET_GAMES:
                return {
                    ...state,
                    games: payload.data as Game[],
                    num: payload.data.length
                };
            case CREATE_GAME:
                state.num += 1;
                action.payload.id = state.num;

                return {
                    ...state,
                    games: [...state.games, action.payload],
                }
            case DELETE_GAME:
                state.num -= 1;
                return {
                    ...state,
                    games: [...state.games.filter(game => game.id !== action.payload)]
                };

            case UPDATE_GAME:
                return {
                    ...state,
                    games: [
                        ...state.games.map(game => {
                                if (game.id === action.payload.id) {
                                    game.name = action.payload.name;
                                    game.rating = action.payload.rating
                                    game.company = action.payload.company
                                    game.sales = action.payload.sales
                                    game.releaseYear = action.payload.releaseYear
                                    game.platform = action.payload.platform
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

export default gameReducer;