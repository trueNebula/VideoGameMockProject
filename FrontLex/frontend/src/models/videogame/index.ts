import {IconButtonProps} from "@mui/material/IconButton"

interface Game {
    gameID: number | null,
    gameName: string,
    releaseYear: number | null,
    company: string,
    rating: number | null,
    sales: number | null,
    platform: string,
    imageLink: string,
    description : string
    isWishlist: boolean
}

export interface GameTableRowProps extends Game {
    handleOnClickCallback: (placeholder: Game) => void,
    deleteGameCallback: (id: number) => void,
    isFiltered?: boolean,
    noDelete?: boolean
}

export interface GameFormProps extends Game {

}

export interface VideoGameCardProps extends IconButtonProps, GameTableRowProps {
}

