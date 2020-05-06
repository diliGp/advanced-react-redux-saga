const commentActionTypes = {
    getComments: {
        request: 'FETCH_COMMENTS_REQUEST',
        success: 'FETCH_COMMENTS_SUCCESS',
        failure: 'FETCH_COMMENTS_FAILURE'
    },
    addComment: 'ADD_COMMENT_REQUEST',
};

export default commentActionTypes;