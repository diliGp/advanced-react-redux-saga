import React from 'react';

const ClickCounterRender = ({ count, increment, decrement }) => {
    return (
        <div>
            <p>Render Click Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default ClickCounterRender;
