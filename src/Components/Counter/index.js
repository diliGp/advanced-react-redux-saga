import React from 'react';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';
import ClickCounterRender from './ClickCounterRender';
import ShareCounter from '../../RenderProps/ShareCounter';

const Counter = () => {
    return (
        <>
            <section>
                <h2>HOC Section</h2>
                <ClickCounter />
                <HoverCounter />
            </section>
            <section>
                <h2>Render Props</h2>
                <ShareCounter
                    render={props => (
                        <ClickCounterRender {...props} />
                    )}
                />
            </section>
        </>
    )
}

export default Counter;
