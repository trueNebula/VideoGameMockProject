import * as React from 'react';
import {styled} from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, {IconButtonProps} from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {red} from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {GameTableRowProps, VideoGameCardProps} from "../../models/videogame";
import {Delete} from "@mui/icons-material";
import {useEffect, useState} from "react";

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const VideoGameCard: React.FC<VideoGameCardProps> = ({
                                                         gameID,
                                                         gameName,
                                                         releaseYear,
                                                         company,
                                                         rating,
                                                         sales,
                                                         platform,
                                                         onClickCallback,
                                                         wishlistCallback,
                                                         deleteGameCallback,
                                                         imageLink,
                                                         description,
                                                         isWishlist
                                                     }: VideoGameCardProps): React.ReactElement => {



    const handleDeleteGameCallback = () => {
        gameID && deleteGameCallback(gameID);
    }

    const handleWishlistCallback = () => {
        console.log(isWishlist)
        isWishlist = !isWishlist;
        console.log(isWishlist)

        wishlistCallback({
            gameID,
            gameName,
            releaseYear,
            company,
            rating,
            sales,
            platform,
            imageLink,
            description,
            isWishlist
        })
    }
    const handleClickCallback = (e: any) => {
        e.preventDefault()
        onClickCallback({
            gameID: gameID,
            gameName: gameName,
            releaseYear,
            company,
            rating,
            sales,
            platform,
            imageLink,
            description,
            isWishlist
        })
    }

    return (
        <Card sx={{maxWidth: 345}} onClick={handleClickCallback}>
            <CardHeader
                avatar={
                    <Avatar sx={{bgcolor: red[500]}} aria-label="game">
                        {gameName.charAt(0)}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon/>
                    </IconButton>
                }
                title={gameName}
                subheader={releaseYear}
            />
            <CardMedia
                component="img"
                height="194"
                image={imageLink}
                alt={gameName}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" onClick={handleWishlistCallback}>
                    <FavoriteIcon style={isWishlist ? {fill: "red"} : {fill: "grey"}}/>
                </IconButton>
                <IconButton aria-label="delete" onClick={handleDeleteGameCallback}>
                    <DeleteIcon/>
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default VideoGameCard;