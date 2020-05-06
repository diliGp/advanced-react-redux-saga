import { all } from 'redux-saga/effects';
import gallerySaga from './Gallery/saga';
import commentsSaga from './Comments/saga';


function* rootSaga() {
    yield all([
        gallerySaga(),
        commentsSaga()
    ])
}

export default rootSaga;