import produce from "immer";
import { galleryActionTypes } from "./actionTypes";

const initialState = {
    processing: false,
    images: [],
    error: ''
};

export const galleryReducer = (state = initialState, action) => {
    return produce(state, draft => {
        switch (action.type) {
            case galleryActionTypes.getImages.request:
                draft.processing = !draft.processing;
                return draft;
            case galleryActionTypes.getImages.success:
                draft.processing = false;
                draft.error = '';
                draft.images = action.payload;
                return draft;
            case galleryActionTypes.getImages.failure:
                draft.processing = false;
                draft.error = action.payload;
                return draft;
            default:
                return draft;
        }
    })
}