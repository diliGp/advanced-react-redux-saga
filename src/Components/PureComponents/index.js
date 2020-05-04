import React, { Component } from 'react';
import CompA from './CompA';
import MemoComp from './MemoComp';

class PureComponents extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }

    handleClick = () => {
        this.setState({
            count: 0
        });
    }

    render() {
        return (
            <div>
                <CompA name="Shivam" />
                <MemoComp count={this.state.count} />
                <button onClick={this.handleClick}>Change Memo</button>
            </div>
        )
    }
}

export default PureComponents;
