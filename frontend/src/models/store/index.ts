export interface DestinationsState {
    destinations: Destination[]
    num: number

}

export interface PrivateDestinationsState {
    privateDestinations: Destination[]
    num: number

}

export interface WishListState {
    wishlist: Destination[]
    num: number
}

export interface DestinationState {
    destination: Destination

}
export interface DestinationStatePrivate {
    destination2: Destination

}
export interface Destination {
    destinationID: number | null,
    destinationName: string,
    geolocation: string,
    imageLink: string,
    description: string
    isWishlist: boolean
    startDate: string,
    endDate: string
}

export interface FrontLexStore {
    destinations: DestinationsState
    privateDestinations: PrivateDestinationsState
    destinationState: DestinationState
    wishlistState: WishListState
    destinationStatePrivate: DestinationStatePrivate
}
