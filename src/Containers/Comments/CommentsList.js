import React from 'react';
import { connect } from 'react-redux';
import commentActionsCreator from '../../store/Comments/actionCreators';

const CommentsList = ({ comments, processing, fetchComment }) => {
    return (
        <section data-test="CommentsListContainer">
            <h1 data-test="CommentListTitle">Comments List</h1>
            <div>
                <button data-test="FetchComments" onClick={fetchComment}>Fetch Comments</button>
                {processing && <p>Loading...</p> }
                {
                    comments && comments.length > 0 ? (
                        <ul data-test="CommentList">
                            {comments.map(comment => (
                                <li key={comment.id} data-test="CommentItem">{comment.body}</li>
                            ))}
                        </ul>
                    ) : ''
                }
            </div>
        </section>
    )
}


const mapStoreToProps = store => ({
    processing: store.comments.processing,
    comments: store.comments.commentsList
});

const mapActionsToProps = {
    fetchComment: commentActionsCreator.getComments.request
};

export default connect(mapStoreToProps, mapActionsToProps)(CommentsList);
