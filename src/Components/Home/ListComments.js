import React from 'react';

const ListComments = ({ comments }) => {
    if (!comments || !comments.length) {
        return null;
    }

    return (
        <ul>
            {comments.map((comment, i) => <li key={i}>{comment}</li>)}
        </ul>
    )
}

export default ListComments;
