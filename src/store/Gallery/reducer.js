import produce from "immer";
import { galleryActionTypes } from "./actionTypes";

const initialState = {
    processing: false,
    images: [],
    error: {

    }
};

export const galleryReducer = (state = initialState, action) => {
    return produce(state, draft => {
        switch (action.type) {
            case galleryActionTypes.getImages.request:
                draft.processing = !draft.processing;
                return draft;
            case galleryActionTypes.getImages.success:
                draft.processing = !draft.processing;
                draft.images = action.payload;
                return draft;
            case galleryActionTypes.getImages.failure:
                draft.processing = !draft.processing;
                draft.error = action.payload;
                return draft;
            default:
                return draft;
        }
    })
}