import CustomNavbar from "../components/NavBar";
import Container from '@mui/material/Container';
import DestinationList from "../containers/DestinationList";
import DestinationFormContainer from "../containers/DestinationFormContainer";
import {UserLogin} from "../models/destination";
import React from "react";


const Destinations: React.FC<UserLogin> = ({username, password} : UserLogin) : React.ReactElement => {

    return (
        <>
            <CustomNavbar username={username} password={password}/>
            <Container className="pt-5">
                <h4 className='my-3'><center>Current Destination: </center></h4>
                <DestinationFormContainer/>
                <h4 className='my-4'><center>Available Destinations: </center></h4>
                <DestinationList/>
            </Container>

        </>
    );
}

export default Destinations;
