import React, { Component } from 'react';
import ListComments from './ListComments';

class Home extends Component {
    state = {
        text: '',
        comments: []
    };


    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            comments: [
                ...this.state.comments,
                this.state.text
            ],
            text: ''
        });
    }

    handleChange = (event) => {
        this.setState({
            text: event.target.value
        });
    }

    render() {
        return (
            <div className="Home" data-test="Home">
                <h1>Home Component</h1>
                <section data-test="FormGroup" role="group">
                    <form onSubmit={this.handleSubmit} data-test="SubmitForm">
                        <p>
                            <textarea
                                name="text" id="text"
                                cols="30" rows="10"
                                value={this.state.text}
                                onChange={this.handleChange}
                                data-test="TextArea"
                            />
                        </p>
                        <p>
                            <button data-test="SubmitButton" name="submit">Submit</button>
                        </p>
                    </form>
                </section>
                {
                    this.state.comments.length > 0 &&
                    <section data-test="ListComments">
                        <ListComments comments={this.state.comments} />
                    </section>
                }
            </div>
        )
    }
}

export default Home;
