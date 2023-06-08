import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { DestinationCardProps } from "../../models/destination";

const DestinationCard: React.FC<DestinationCardProps> = ({
                                                         destinationID,
                                                         destinationName,
                                                         geolocation,
                                                         description,
                                                         imageLink,
                                                         onClickCallback,
                                                         wishlistCallback,
                                                         deleteDestinationCallback,
                                                         isWishlist,
                                                         permissions
                                                     }: DestinationCardProps): React.ReactElement => {


    let randomColor = require('randomcolor');

    const handleDeleteGameCallback = () => {
        destinationID && deleteDestinationCallback(destinationID);
    }

    const handleWishlistCallback = () => {
        isWishlist = !isWishlist;

        wishlistCallback({
            destinationID,
            destinationName,
            geolocation,
            imageLink,
            description,
            isWishlist
        })
    }
    const handleClickCallback = (e: any) => {
        e.preventDefault()
        onClickCallback({
            destinationID: destinationID,
            destinationName: destinationName,
            geolocation,
            imageLink,
            description,
            isWishlist
        })
    }

    return (
        <Card sx={{maxWidth: 345}} onClick={handleClickCallback}>
            <CardHeader
                avatar={
                    <Avatar sx={{bgcolor: randomColor({seed: destinationName + "theGameLmao"})}} aria-label="game">
                        {destinationName.charAt(0)}
                    </Avatar>
                }
                title={destinationName}
                style={{whiteSpace: 'pre-line'}}
                subheader={geolocation}
            />
            <CardMedia
                component="img"
                height="194"
                image={imageLink}
                alt={destinationName}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                {permissions !== "admin" &&
                <IconButton aria-label="add to favorites" onClick={handleWishlistCallback}>
                    <FavoriteIcon style={isWishlist ? {fill: "red"} : {fill: "grey"}}/>
                </IconButton>}
                <IconButton aria-label="delete" onClick={handleDeleteGameCallback}>
                    <DeleteIcon/>
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default DestinationCard;