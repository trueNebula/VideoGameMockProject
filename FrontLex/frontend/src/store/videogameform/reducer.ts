import {CLEAR_GAME, SET_GAME} from "./types";
import {Game, VideoGamesState, VideoGameState} from "../../models/store";


const initialState = {
    game: {
        id: null,
        name: "",
        company: "",
        rating: null,
        releaseYear: null,
        platform: "",
        sales: null
    } as Game
};

const gameFormReducer = (state: VideoGameState = initialState, action: any): VideoGameState => {
        const {type, payload} = action;
        switch (type) {
            case SET_GAME:
                console.log(action)
                return {
                    game: {...payload.data}
                };
            case CLEAR_GAME:
                console.log(action)
                return {
                    game: {...initialState.game}
                };
            default:
                return state;
        }
    }
;

export default gameFormReducer;