import {Game} from "../../models/store";

export const getVideoGamesAPI = async (): Promise<any> => {
    try {
        // call to backend
        const dummyResponse = [{
            id: 0,
            name: 'Dota2',
            releaseYear: 2000,
            company: 'Marvel',
            rating: 3,
            sales: 3,
            platform: 'PC'
        }, {
            id: 1,
            name: 'LoL',
            releaseYear: 2000,
            company: 'Marvel',
            rating: 3,
            sales: 3,
            platform: 'PC'
        }, {
            id: 2,
            name: 'Fifa',
            releaseYear: 2000,
            company: 'Marvel',
            rating: 3,
            sales: 3,
            platform: 'PC'
        }] as Game[]

        return Promise.resolve(dummyResponse);
    } catch (e) {
        console.log(e)
    }
}