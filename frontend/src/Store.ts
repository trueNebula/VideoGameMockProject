import {createStore, combineReducers, applyMiddleware} from "@reduxjs/toolkit";
import destinations from "./store/destinations/reducer";
import destinationState from "./store/destinationform/reducer";
import {FrontLexStore} from "./models/store";
import {Store, CombinedState} from "redux";
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import wishlistState from "./store/wishlist/reducer";
import privateDestinations from "./store/privatelist/reducer";
import destinationStatePrivate from "./store/destinationform2/reducer"

const store: Store<CombinedState<FrontLexStore>> = createStore(
    combineReducers({
        destinations, privateDestinations, destinationState, wishlistState, destinationStatePrivate
    } ),
    composeWithDevTools(applyMiddleware(thunk)));

export default store;