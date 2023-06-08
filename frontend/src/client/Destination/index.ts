import { Destination } from "../../models/store";

export const getDestinationsAPI = async (): Promise<any> => {
    try {
        // call to backend
        const dummyResponse = [{
            destinationID: 1,
            destinationName: 'Bali',
            geolocation: 'Indonesia',
            imageLink: "https://travel.usnews.com/dims4/USNEWS/8468e04/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2F445_280_1296099441_a936e2155c_b_445x280_QbEpnh1.jpg",
            description: "Summer is a great time to visit Bali because it falls within the Indonesian destination's dry season. Plus, daytime temperatures consistently stay below 90 degrees.",
            isWishlist: false

        }, {
            destinationID: 2,
            destinationName: 'Vancouver',
            geolocation: 'Canada',
            imageLink: "https://travel.usnews.com/dims4/USNEWS/4afa433/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fgettyimages-612004360_VL5d66O.jpg",
            description: "Summer transforms Vancouver, British Columbia, into a mecca of festivals and outdoor activities.",
            isWishlist: false
        }, {
            destinationID: 3,
            destinationName: 'Rome',
            geolocation: 'Italy',
            imageLink: "https://travel.usnews.com/dims4/USNEWS/981979e/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fmain_image_cropped_rome_445x280_f0qQD4i.jpg",
            description: "Since so many of the Eternal City's iconic landmarks are outside, summer is a perfect time for a Roman holiday.",
            isWishlist: false

        }] as Destination[]

        return Promise.resolve(dummyResponse);
    } catch (e) {
        console.log(e)
    }
}