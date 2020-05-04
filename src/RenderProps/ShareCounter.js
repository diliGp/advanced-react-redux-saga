import React, { Component } from 'react';

class ShareCounter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }

    increment = () => {
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    }

    decrement = () => {
        this.setState(prevState => ({
            count: prevState.count - 1
        }));
    }

    render() {
        return (
            <div>
                {this.props.render({
                    count: this.state.count,
                    increment: this.increment,
                    decrement: this.decrement
                })}
            </div>
        )
    }
}

export default ShareCounter;
