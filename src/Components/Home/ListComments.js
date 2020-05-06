import React from 'react';

const ListComments = ({ comments }) => {
    if (!comments || !comments.length) {
        return null;
    }

    return (
        <ul data-test="ListComments">
            {comments.map((comment, i) => <li data-test="CommentLi" key={i}>{comment}</li>)}
        </ul>
    )
}

export default ListComments;
