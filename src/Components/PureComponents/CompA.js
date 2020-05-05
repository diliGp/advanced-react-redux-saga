import React, { PureComponent } from 'react'
// import { shallowEqual } from 'react-redux';

class CompA extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    /**
     * If we'll use `Component` instead of `PureComponent`,
     * we can achieve the same behavior with this life cycle method.
     */
    /* shouldComponentUpdate(nextProps, nextStates) {
        return !shallowEqual(this.state, nextStates);
    } */

    handleClick = () => {
        /**
         * Rendering will happen only if we're not using `PureComponent` 
         */
        this.setState({
            count: 0
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        )
    }
}

export default CompA;
