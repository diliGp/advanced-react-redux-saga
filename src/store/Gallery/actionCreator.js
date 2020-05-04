import { galleryActionTypes } from "./actionTypes";

const {
    getImages
} = galleryActionTypes;

export const galleryActionCreators = {
    getImages: {
        request: () => ({ type: getImages.request }),
        success: payload => {
            console.log('here');
            return ({
            type: getImages.success,
            payload
        })},
        failure: payload => ({
            type: getImages.failure,
            payload
        })
    }
};