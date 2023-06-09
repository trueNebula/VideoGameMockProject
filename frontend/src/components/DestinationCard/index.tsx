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
import {TextField, FormControl} from "@mui/material";
import Button from "@mui/material/Button";
import {useState} from "react";

const DestinationCard: React.FC<DestinationCardProps> = ({
                                                         destinationID,
                                                         destinationName,
                                                         geolocation,
                                                         description,
                                                         imageLink,
                                                         startDate,
                                                         endDate,
                                                         onClickCallback,
                                                         wishlistCallback,
                                                         updateCallback,
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
            isWishlist,
            startDate,
            endDate
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
            isWishlist,
            startDate,
            endDate
        })
    }

    const [selection, setSelection] = useState<{
        startDate: string,
        endDate: string
    }>({
        startDate: "",
        endDate: ""
    })

    const handleInputSubmit = () => {
        console.log(selection)
        updateCallback({
            destinationID: destinationID,
            destinationName: destinationName,
            geolocation: geolocation,
            imageLink: imageLink,
            description: description,
            isWishlist: isWishlist,
            startDate: selection.startDate,
            endDate: selection.endDate
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

                {isWishlist &&
                    <>
                        {/*
                        <Typography variant="body1" color="text.primary">
                            {startDate !== undefined ? `Starting on  ${startDate}` : "No start date chosen!"}
                        </Typography>
                        <Typography variant="body1" color="text.primary">
                            {endDate !== undefined ? `Ending on  ${endDate}` : "No end date chosen!"}
                        </Typography>
                        */}
                        <FormControl>
                            <TextField label="Start Date"
                                       value={selection.startDate ? selection.startDate : ""}
                                       onChange={e => setSelection({
                                           ...selection!,
                                           startDate: e.target.value
                                       })} type="text" placeholder=""/>
                            <TextField label="End Date"
                                       value={selection.endDate ? selection.endDate : ""}
                                       onChange={e => setSelection({
                                           ...selection!,
                                           endDate: e.target.value
                                       })} type="text" placeholder=""/>
                            <Button  variant={"contained"} color={"success"} sx={{'width':'240px', 'height':'50px'}}
                                     onClick={handleInputSubmit}>Update Dates</Button>
                        </FormControl>

                    </>
                }
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