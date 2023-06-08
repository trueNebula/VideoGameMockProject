import React from 'react';
import CustomNavbar from "../components/NavBar";
import Container from '@mui/material/Container';
import WishlistContainer from "../containers/WishlistContainer";
import {UserLogin} from "../models/destination";


const Wishlist: React.FC<UserLogin> = ({username, password, permissions} : UserLogin) : React.ReactElement => {

    return (
        <>
            <CustomNavbar username={username} password={password}/>
            <Container className="pt-5">
                <WishlistContainer permissions={permissions}/>
            </Container>

        </>
    );
}

export default Wishlist;

