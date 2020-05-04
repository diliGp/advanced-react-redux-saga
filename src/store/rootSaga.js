import { all } from 'redux-saga/effects';
import gallerySaga from './Gallery/saga';


function* rootSaga() {
    yield all([
        gallerySaga(),
    ])
}

export default rootSaga;