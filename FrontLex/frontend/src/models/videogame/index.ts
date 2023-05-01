interface Game {
    id: number | null,
    name: string,
    releaseYear: number | null,
    company: string,
    rating: number | null,
    sales: number | null,
    platform: string,
}

export interface GameTableRowProps extends Game {
    handleOnClickCallback: (placeholder: Game) => void,
    deleteGameCallback: (id: number) => void,
    isFiltered?: boolean,
    noDelete?: boolean
}

export interface GameFormProps extends Game {
}

