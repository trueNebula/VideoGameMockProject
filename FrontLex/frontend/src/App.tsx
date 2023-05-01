import React from 'react';
import './App.css';
import {Provider} from "react-redux"
import store from "./Store";
import Games from "./pages/Games";

function App() {
    return (
        <Provider store={store}>
            <Games/>
        </Provider>
    );
}

export default App;
