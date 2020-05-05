import { galleryReducer } from "../reducer";
import { galleryActionTypes } from "../actionTypes";

const initialState = {
    processing: false,
    images: [],
    error: ''
};

const setup = (action, state = undefined) => galleryReducer(state, action);

describe('Gallery Reducer', () => {
    it('Should render initial state', () => {
        const result = setup({
            type: ''
        });
        expect(result).toEqual(initialState);
    });

    it('Should change processing to true', () => {
        const newState = {
            ...initialState,
            processing: true
        };

        const result = setup({
            type: galleryActionTypes.getImages.request
        });

        expect(result).toEqual(newState);
    });

    it('Should set error', () => {
        const error = 'Something went wrong!!';
        const newState = {
            ...initialState,
            error
        };

        const result = setup({
            type: galleryActionTypes.getImages.failure,
            payload: error
        });

        expect(result).toEqual(newState);
    });
    
    it('Should set images array when pasing action type `success`', () => {
        const images = [{
            id: 1,
            alt_description: 'Test alt', 
            urls : {
                full: 'http://dummyimage.com'
            }
        }];
        const newState = {
            ...initialState,
            images
        };

        const result = setup({
            type: galleryActionTypes.getImages.success,
            payload: images
        });

        expect(result).toEqual(newState);
    });

});