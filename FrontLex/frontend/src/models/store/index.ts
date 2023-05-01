export interface VideoGamesState {
    games: Game[]
    num : number

}

export interface VideoGameState{
    game: Game

}

export interface Game {
    id: number | null,
    name: string,
    releaseYear: number | null,
    company: string,
    rating: number | null,
    sales: number | null,
    platform: string
}

export interface FrontLexStore {
    videoGames: VideoGamesState
    gameState : VideoGameState
}

