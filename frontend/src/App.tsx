import React, {createContext, useContext, useState} from 'react';
import './App.css';
import {Provider} from "react-redux"
import store from "./Store";
import Destinations from "./pages/Destinations";
import Login from "./pages/Login"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Wishlist from "./pages/Wishlist";
import {UserLogin} from "./models/destination";
import PrivateDestinations from "./pages/PrivateDestinations";


function App() {

    const LoginContext = createContext<UserLogin>({username: "", password: "", permissions: ""});
    const LoginMode = useContext(LoginContext);
    const [userLogin, setUserLogin] = useState(LoginMode)

    const handleUserLogin = (u: UserLogin) => {
        setUserLogin(u);
        console.log(u);
    }


    console.log(userLogin)
    return (
        <Provider store={store}>
            <LoginContext.Provider value={userLogin}>
                {JSON.stringify(userLogin) !== JSON.stringify({username: '', password: '', permissions: ''}) ?
                    <BrowserRouter>
                        <Routes>
                            <Route path="/"
                                   element={<Destinations username={userLogin.username} password={userLogin.password}
                                                          permissions={userLogin.permissions}/>}/>
                            <Route path="/wishlist"
                                   element={<Wishlist username={userLogin.username} password={userLogin.password}
                                                      permissions={userLogin.permissions}/>}/>
                            <Route path="/private" element={<PrivateDestinations username={userLogin.username}
                                                                                 password={userLogin.password}
                                                                                 permissions={userLogin.permissions}/>}/>
                        </Routes>
                    </BrowserRouter> :
                    <Login setUserLoginCallback={(userData) => handleUserLogin(userData)}></Login>}
            </LoginContext.Provider>
        </Provider>

    );
}

// dreadful realisation ca versiunea mea nu e updated cu a ta si se vor fute branch-urile
// nuj proiect
export default App;
