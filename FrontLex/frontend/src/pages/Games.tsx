import CustomNavbar from "../components/NavBar";
import Container from '@mui/material/Container';
import VideoGameList from "../container/VideoGameList";
import VideoGameFormContainer from "../container/VideoGameFormContainer";


const Games = () => {

    return (
        <>
            <CustomNavbar/>
            <Container className="pt-5">
                <h4 className='my-3'><center>Current Game: </center></h4>
                <VideoGameFormContainer/>
                <VideoGameList/>
            </Container>

        </>
    );
}

export default Games;

