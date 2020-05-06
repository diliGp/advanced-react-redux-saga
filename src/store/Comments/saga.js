import commentActionTypes from "./actionTypes";
import { takeEvery, call, put } from 'redux-saga/effects';
import commentActionsCreator from "./actionCreators";
import API from "../../Services/API";

export function* fetchComments() {
    try {
        const { data } = yield call(API.comments.getList);
        yield put(commentActionsCreator.getComments.success(data));
    } catch (error) {
        yield put(commentActionsCreator.getComments.failure(error.message));
    }
}


function* commentsSaga() {
    yield takeEvery(commentActionTypes.getComments.request, fetchComments);
}

export default commentsSaga;