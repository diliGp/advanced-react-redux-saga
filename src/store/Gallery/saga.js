import { takeEvery, call, put } from 'redux-saga/effects';
import { galleryActionTypes } from './actionTypes';
import API from '../../Services/API';
import { galleryActionCreators } from './actionCreator';

export function* getAllImages(action) {
    try {
        const { data } = yield call(API.gallery.getAll);
        yield put(galleryActionCreators.getImages.success([...data]));
    } catch (error) {
        yield put(galleryActionCreators.getImages.failure(error.message))
    }
}


function* gallerySaga(params) {
    yield takeEvery(galleryActionTypes.getImages.request, getAllImages);
};

export default gallerySaga;