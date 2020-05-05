import React from 'react';

const ClickCounterRender = ({ count, increment, decrement }) => {
    return (
        <div data-test="ClickCounterRenderConatiner">
            <p>Render Click Count: {count}</p>
            <button data-test="IncrementBtn" onClick={increment}>Increment</button>
            <button data-test="DecrementBtn" onClick={decrement}>Decrement</button>
        </div>
    )
}

export default ClickCounterRender;
