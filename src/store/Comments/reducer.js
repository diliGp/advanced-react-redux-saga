import produce from "immer"
import commentActionTypes from "./actionTypes"

const initialState = {
    processing: false,
    commentsList: [],
    error: ''
}

const commentsReducer = (state = initialState, action) => {
    return produce(state, draft => {
        switch(action.type) {
            case commentActionTypes.getComments.request:
                draft = {
                    ...draft,
                    processing: true
                };
                return draft;
            case commentActionTypes.getComments.success:
                draft = {
                    ...draft,
                    processing: false,
                    error: '',
                    commentsList: [
                        ...state.commentsList,
                        ...action.payload
                    ]
                };
                return draft;
            case commentActionTypes.getComments.failure:
                draft = {
                    ...draft,
                    processing: false,
                    error: ''
                };
                return draft;
            case commentActionTypes.addComment:
                draft = {
                    ...draft,
                    commentsList: [
                        ...action.payload,
                        ...state.commentsList,
                    ]
                };
                return draft;
            default:
                return draft;
        }
    })
};

export default commentsReducer;