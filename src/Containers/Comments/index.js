import React from 'react';
import AddComment from './AddComment';
import CommentsList from './CommentsList';
import './comments.scss';

const Comments = () => {
    return (
        <div className="CommentsWrapper" data-test="CommentsWrapper">
            <AddComment />
            <CommentsList />
        </div>
    )
}


export default Comments;
