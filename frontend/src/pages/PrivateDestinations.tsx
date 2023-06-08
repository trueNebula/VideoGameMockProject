import CustomNavbar from "../components/NavBar";
import Container from '@mui/material/Container';
import DestinationList from "../containers/DestinationList";
import DestinationFormContainer from "../containers/DestinationFormContainer";
import {UserLogin} from "../models/destination";
import React from "react";
import PrivateContainer from "../containers/PrivateContainer";


const PrivateDestinations: React.FC<UserLogin> = ({username, password, permissions}: UserLogin): React.ReactElement => {

    return (
        <>
            <CustomNavbar username={username} password={password} permissions={permissions}/>
            <Container className="pt-5">
                <h4 className='my-3'>
                    <center>Current Destination:</center>
                </h4>
                <DestinationFormContainer permissions={permissions}/>
                <h4 className='my-4'>
                    <center>Available Destinations:</center>
                </h4>
                <PrivateContainer permissions={permissions}/>

            </Container>

        </>
    );
}

export default PrivateDestinations;

