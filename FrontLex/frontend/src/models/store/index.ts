export interface DestinationsState {
    destinations: Destination[]
    num: number

}

export interface WishListState {
    wishlist: Destination[]
    num: number
}

export interface DestinationState {
    destination: Destination

}

export interface Destination {
    destinationID: number | null,
    destinationName: string,
    geolocation: string,
    imageLink: string,
    description: string
    isWishlist: boolean
}

export interface FrontLexStore {
    destinations: DestinationsState
    destinationState: DestinationState
    wishlistState: WishListState
}
