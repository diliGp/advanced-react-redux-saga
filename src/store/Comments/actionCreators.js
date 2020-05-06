import commentActionTypes from './actionTypes';

const commentActionsCreator = {
    getComments: {
        request: () => ({ type: commentActionTypes.getComments.request }),
        success: payload => ({
            type: commentActionTypes.getComments.success,
            payload
        }),
        failure: payload => ({
            type: commentActionTypes.getComments.failure,
            payload
        })
    },
    addComment: payload => ({ 
        type: commentActionTypes.addComment,
        payload
    })
};

export default commentActionsCreator;