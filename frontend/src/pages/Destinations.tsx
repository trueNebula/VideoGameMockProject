import CustomNavbar from "../components/NavBar";
import Container from '@mui/material/Container';
import DestinationList from "../containers/DestinationList";
import DestinationFormContainer from "../containers/DestinationFormContainer";
import {UserLogin} from "../models/destination";
import React from "react";


const Destinations: React.FC<UserLogin> = ({username, permissions} : UserLogin) : React.ReactElement => {

    return (
        <>
            <CustomNavbar username={username} permissions={permissions}/>
            <Container className="pt-5">
                <h4 className='my-3'><center>Current Destination: </center></h4>
                <DestinationFormContainer permissions={permissions}/>
                <h4 className='my-4'><center>Available Destinations: </center></h4>
                <DestinationList permissions={permissions}/>
            </Container>

        </>
    );
}

export default Destinations;

