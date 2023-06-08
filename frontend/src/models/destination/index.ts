import {IconButtonProps} from "@mui/material/IconButton"

export interface ErrorMessages {
    name?: string,
    message?: string
}

export interface UserLogin {
    username?: string,
    password?: string,
    permissions?: string
}

interface Destination {
    destinationID: number | null,
    destinationName: string,
    geolocation: string,
    imageLink: string,
    description: string
    isWishlist: boolean
}

export interface DestinationRowProps extends Destination {
    onClickCallback: (placeholder: Destination) => void,
    deleteDestinationCallback: (id: number) => void,
    isFiltered?: boolean,
    noDelete?: boolean,
    permissions: string | undefined
}

export interface DestinationFormProps extends Destination {
    updateCallback: (destination: Destination) => void
    createCallback: (destination: Destination) => void
}

export interface LoginProps {
    setUserLoginCallback : (destination: UserLogin) => void
}

export interface DestinationCardProps extends IconButtonProps, DestinationRowProps {
    wishlistCallback: (destination: Destination) => void
}

