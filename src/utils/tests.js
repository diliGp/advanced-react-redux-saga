import { runSaga } from "redux-saga";

export const findByAttr = (wrapper, attr) => {
    return wrapper.find(`[data-test="${attr}"]`);
}

/**
 * Executes saga outside redux flow chain, and records saga execution stages.
 * 
 * @param {*} saga 
 * @param {*} store 
 * @param {*} initialAction 
 */
export const recordSaga = async(saga, store, initialAction = {}) => {
    const dispatched = [];

    await runSaga({
        /**
         * Fires when a dispatch is fired from given saga execution.
         * like when `yield put` is called in saga execution.
         */
        dispatch: action => dispatched.push(action),
    }, saga, initialAction).done;

    return {
        dispatched
    };
}