import React, { Component } from 'react'

const ShareCounter = (WrappedComponent, data) => {
    return class extends Component {
        constructor(props) {
            super(props);

            this.state = {
                count: 0
            }
        }

        incrementCount = () => {
            this.setState(prevState => ({
                count: prevState.count + 1
            }));
        }

        decrementCount = () => {
            this.setState(prevState => ({
                count: prevState.count - 1
            }));
        }

        render() {
            return (
                <WrappedComponent
                    count={this.state.count}
                    increment={this.incrementCount}
                    decrement={this.decrementCount}
                    {...this.props}
                />
            )
        }
    }
}

export default ShareCounter;
