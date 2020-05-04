import React from 'react';
import ShareCounter from '../../HOC/ShareCounter';

const ClickCounter = ({ count, increment, decrement }) => {
    return (
        <div>
            <p>Current Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default ShareCounter(ClickCounter);
