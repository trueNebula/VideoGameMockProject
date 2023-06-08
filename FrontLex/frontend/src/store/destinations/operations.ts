import { Dispatch } from "redux";
import { setDestinations, SetDestinationsActions } from "./actions";
import { getDestinationsAPI } from "../../client/Destination";

export const getDestinations = () =>
    async (dispatch: Dispatch<SetDestinationsActions>) => {
        try {
            const videoGameResponse = await getDestinationsAPI();
            dispatch(setDestinations(videoGameResponse));


        } catch (e) {
            console.log(e)
        }
    }


export default {getDestinations};
