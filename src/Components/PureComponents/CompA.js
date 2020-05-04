import React, { PureComponent, Component } from 'react'
// import { shallowEqual } from 'react-redux';

class CompA extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

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

        /**
         * Rendering will happen always with this way.
         */
        /* this.setState({
            count: this.state.count + 1
        }); */
    }

    render() {
        console.log('rendered...');
        return (
            <div>
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        )
    }
}

export default CompA;
