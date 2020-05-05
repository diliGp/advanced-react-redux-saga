import { galleryActionTypes } from "./actionTypes";

const {
    getImages
} = galleryActionTypes;

export const galleryActionCreators = {
    getImages: {
        request: () => ({ type: getImages.request }),
        success: payload => {
            return ({
                type: getImages.success,
                payload
            })
        },
        failure: payload => ({
            type: getImages.failure,
            payload
        })
    }
};