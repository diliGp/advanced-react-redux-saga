import React from 'react';
import ShareCounter from '../../HOC/ShareCounter';

const HoverCounter = ({ count, increment, decrement }) => {
    return (
        <div>
            <p>Hover Count: {count}</p>
            <button onMouseOver={increment}>Increment</button>
            <button onMouseOver={decrement}>Decrement</button>
        </div>
    )
}

export default ShareCounter(HoverCounter);
