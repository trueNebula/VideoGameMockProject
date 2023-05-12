import React, {useState} from 'react';
import './App.css';
import {Provider} from "react-redux"
import store from "./Store";
import Games from "./pages/Games";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import Wishlist from "./pages/Wishlist";


function App() {

    // userLogin ? return normal :  login form + error message (please try again, invalid)

    const [userLogin, setUserLogin] = useState({})

    // useContext --> docs
    // higher order component (HOCs)

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Games/>}/>
                    <Route path="/wishlist" element={<Wishlist/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>

    );
}

export default App;
