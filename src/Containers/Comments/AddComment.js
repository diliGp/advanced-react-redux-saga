import React, { useState } from 'react';
import commentActionsCreator from '../../store/Comments/actionCreators';
import { connect } from 'react-redux';
import { v4 as uuid4 } from 'uuid';

const AddComment = ({ addComment }) => {
    const [comment, setComment] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        addComment([{
            id: uuid4(),
            body: comment
        }]);
    }

    return (
        <section className="AddComment" data-test="AddCommentContainer">
            <h1>Add New Comment</h1>
            <div className="FormWrapper">
                <form onSubmit={handleSubmit}>
                    <p>
                        <textarea
                            name="comment-text"
                            id="comment-text"
                            cols="30" rows="10"
                            onChange={e => setComment(e.target.value)}
                            value={comment}
                        />
                    </p>
                    <p>
                        <button type="submit">Add Comment</button>
                    </p>
                </form>
            </div>
        </section>
    )
}

const mapActionToProps = {
    addComment: commentActionsCreator.addComment
};

export default connect(undefined, mapActionToProps)(AddComment);
