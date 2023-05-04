import {createStore, combineReducers, applyMiddleware} from "@reduxjs/toolkit";
import videoGames from "./store/videogames/reducer";
import gameState from "./store/videogameform/reducer";
import {FrontLexStore} from "./models/store";
import {Store, CombinedState} from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import wishlistState from "./store/wishlist/reducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const store: Store<CombinedState<FrontLexStore>> = createStore(
    combineReducers({
    videoGames, gameState, wishlistState
}),
    composeWithDevTools(applyMiddleware(thunk)));

// TODO: adapt to configureStore
export default store;