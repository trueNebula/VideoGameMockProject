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
import {useState} from "react";

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
                                                         handleOnClickCallback,
                                                         deleteGameCallback,
                                                         imageLink,
                                                         description,
                                                         isWishlist
                                                     }: VideoGameCardProps): React.ReactElement => {

    const [inner, setInner] = useState(isWishlist)

    const handleDeleteGameCallback = () => {
        gameID && deleteGameCallback(gameID);
    }
    const handleClick = (e: any) => {
        e.preventDefault()
        handleOnClickCallback({
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

    const handleWishlist = () => {
        setInner(!inner);
        isWishlist = !isWishlist;
    }

    return (
        <Card sx={{maxWidth: 345}} onClick={handleClick}>
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
                <IconButton aria-label="add to favorites" onClick={handleWishlist}>
                    <FavoriteIcon style={inner ? {fill: "red"} : {fill: "grey"}}/>
                </IconButton>
                <IconButton aria-label="delete" onClick={handleDeleteGameCallback}>
                    <DeleteIcon/>
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default VideoGameCard;