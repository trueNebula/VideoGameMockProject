import {ADD_GAME, UPDATE_GAME, DELETE_GAME} from "./types";
import {Game} from "../../models/store";

const addWishlistGame = (data: Game) => {
    return {
        type: ADD_GAME,
        payload: data
    };
};

const deleteWishlistGame = (data: number) => {
    return {
        type: DELETE_GAME,
        payload: data
    };
};

const updateWishlistGame = (data: Game) => {
    return {
        type: UPDATE_GAME,
        payload: data

    };
};


export {addWishlistGame, deleteWishlistGame, updateWishlistGame};